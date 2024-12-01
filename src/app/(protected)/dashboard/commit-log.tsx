"use client";

import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import type { Commit, Project } from "@prisma/client";
import { ExternalLink, GitCommit } from 'lucide-react';
import Link from "next/link";
import useProject from "@/hooks/use-project";
import { formatDistanceToNow } from "date-fns";

export default function CommitLog() {
    const { projectId, project } = useProject();
    const { data: commits } = api.project.getCommits.useQuery({ projectId });

    if (!commits) return null;

    return (
        <ul role="list" className="space-y-6">
            {commits.map((commit, commitIdx) => (
                <li key={commit.id} className="relative flex gap-x-4">
                    <div
                        className={cn(
                            commitIdx === commits.length - 1 ? "h-6" : "-bottom-6",
                            "absolute left-0 top-0 flex w-6 justify-center",
                        )}
                    >
                        <div className="w-px bg-blue-600" />
                    </div>
                    <div className="relative mt-3 flex h-6 w-6 flex-none items-center justify-center bg-gray-900 rounded-full ring-2 ring-blue-600">
                        <GitCommit className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex-auto rounded-xl bg-gray-900 p-4 ring-1 ring-inset ring-gray-800 transition-all duration-300 hover:shadow-blue-900/20">
                        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-x-4">
                            <Link
                                target="_blank"
                                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                href={`${project?.githubUrl}/commits/${commit.commitHash}`}
                            >
                                <span className="font-medium text-blue-400">
                                    {commit.commitAuthorName}
                                </span>{" "}
                                <span className="inline-flex items-center">
                                    committed
                                    <ExternalLink className="ml-1 h-4 w-4" />
                                </span>
                            </Link>
                            <time
                                dateTime={commit.commitDate.toString()}
                                className="text-xs text-gray-500"
                            >
                                {formatDistanceToNow(commit.commitDate, {
                                    addSuffix: true,
                                })}
                            </time>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-300">{commit.commitMessage}</p>
                        <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-400 bg-gray-800 p-3 rounded-lg overflow-x-auto">
                            {commit.summary}
                        </pre>
                    </div>
                </li>
            ))}
        </ul>
    );
}

