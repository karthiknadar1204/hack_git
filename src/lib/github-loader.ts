import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";
import pLimit from 'p-limit'
import { getEmbeddings } from "./gemini";
import { getSummary } from "./openai";
import { exit } from "process";
import { db } from "@/server/db";
import { Octokit } from "octokit";

const getFileCount = async (path: string, octokit: Octokit, githubOwner: string, githubRepo: string, acc: number = 0) => {
    try {
        const { data } = await octokit.rest.repos.getContent({
            owner: githubOwner,
            repo: githubRepo,
            path: path
        });
        
        if (Array.isArray(data)) {
            const limit = pLimit(5);
            const counts = await Promise.all(
                data.map(item => {
                    if (item.type === 'dir') {
                        return limit(() => getFileCount(item.path, octokit, githubOwner, githubRepo, 0));
                    }
                    return limit(() => Promise.resolve(1));
                })
            );
            return acc + counts.reduce((a, b) => a + b, 0);
        }
        return acc + 1;
    } catch (error) {
        console.error('Error getting file count:', error);
        return acc;
    }
}

export const checkCredits = async (githubUrl: string, githubToken?: string) => {
    const octokit = new Octokit({
        auth: githubToken
    });
    
    const urlParts = githubUrl.split('/');
    const githubOwner = urlParts[3];
    const githubRepo = urlParts[4]?.replace('.git', '');
    
    if (!githubOwner || !githubRepo) return 0;
    
    try {
        const fileCount = await getFileCount('', octokit, githubOwner, githubRepo, 0);
        return fileCount;
    } catch (error) {
        console.error('Error checking credits:', error);
        return 0;
    }
}

export const loadGithubRepo = async (githubUrl: string, githubToken?: string) => {
    try {
        const loader = new GithubRepoLoader(
            githubUrl,
            {
                branch: "main",
                ignoreFiles: ['package-lock.json', 'bun.lockb', 'yarn.lock', '.git'],
                recursive: true,
                accessToken: githubToken,
                unknown: "warn",
                maxConcurrency: 5,
            }
        );
        
        const docs = await loader.load();
        return docs;
    } catch (error) {
        // Try fallback to master branch if main fails
        try {
            const loader = new GithubRepoLoader(
                githubUrl,
                {
                    branch: "master",
                    ignoreFiles: ['package-lock.json', 'bun.lockb', 'yarn.lock', '.git'],
                    recursive: true,
                    accessToken: githubToken,
                    unknown: "warn",
                    maxConcurrency: 5,
                }
            );
            
            const docs = await loader.load();
            return docs;
        } catch (fallbackError) {
            throw new Error(`Unable to fetch repository files: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
};

export const indexGithubRepo = async (projectId: string, githubUrl: string, githubToken?: string) => {
    const docs = await loadGithubRepo(githubUrl, githubToken);
    const allEmbeddings = await generateEmbeddings(docs)
    const limit = pLimit(10);
    await Promise.allSettled(
        allEmbeddings.map((embedding, index) =>
            limit(async () => {
                console.log(`processing ${index} of ${allEmbeddings.length}`);
                if (!embedding) throw new Error("embedding is null");

                // First, upsert the basic data
                const sourceCodeEmbedding = await db.sourceCodeEmbedding.upsert({
                    where: {
                        projectId_fileName: {
                            projectId,
                            fileName: embedding.fileName
                        }
                    },
                    update: {
                        summary: embedding.summary,
                        sourceCode: embedding.sourceCode,
                    },
                    create: {
                        summary: embedding.summary,
                        sourceCode: embedding.sourceCode,
                        fileName: embedding.fileName,
                        projectId,
                    }
                });

                // Then, update the summaryEmbedding using raw SQL
                await db.$executeRaw`
                UPDATE "SourceCodeEmbedding"
                SET "summaryEmbedding" = ${embedding.embeddings}::vector
                WHERE id = ${sourceCodeEmbedding.id}
            `;
            })
        )
    )
}



async function generateEmbeddings(docs: Awaited<ReturnType<typeof loadGithubRepo>>) {
    return await Promise.all(docs.map(async (doc) => {
        const summary = await getSummary(doc);
        if (!summary) return null;
        const embeddings = await getEmbeddings(summary);
        return {
            summary,
            embeddings,
            sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
            fileName: doc.metadata.source,
        };
    }));
}
// console.log("done")

// const query = 'what env is needed for this project?'


// const embedding = await getEmbeddings(query)
// const vectorQuery = `[${embedding.join(',')}]`

// const result = await db.$queryRaw`
//   SELECT
//     id,
//     summary,
//     1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) as similarity
//   FROM "SourceCodeEmbedding"
//   where 1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) > .5
//   ORDER BY  similarity DESC
//   LIMIT 10;
// `
// console.log(result)