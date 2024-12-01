'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'
import { FileCode } from 'lucide-react';

type Props = {
    filesReferenced: {
        fileName: string
        sourceCode: string
    }[]
}

const CodeReferences = ({ filesReferenced }: Props) => {
    const [tab, setTab] = React.useState(filesReferenced[0]?.fileName)
    
    if (!filesReferenced.length) return null
    
    return (
        <div className="max-w-[70vw] bg-gray-900 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <FileCode className="w-5 h-5 mr-2" />
                Referenced Files
            </h3>
            <Tabs defaultValue={tab} value={tab} onValueChange={(value) => setTab(value)}>
                <div className="overflow-x-auto scrollbar-hide flex gap-2 bg-gray-800 p-2 rounded-md mb-4">
                    {filesReferenced.map((file) => (
                        <button
                            key={file.fileName}
                            onClick={() => setTab(file.fileName)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap
                                ${tab === file.fileName
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                                }`}
                        >
                            {file.fileName}
                        </button>
                    ))}
                </div>
                {filesReferenced.map((file) => (
                    <TabsContent key={file.fileName} value={file.fileName} className="max-h-[40vh] overflow-auto rounded-md border border-gray-700">
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus}
                            customStyle={{
                                margin: 0,
                                borderRadius: '0.375rem',
                                fontSize: '0.875rem',
                            }}
                        >
                            {file.sourceCode}
                        </SyntaxHighlighter>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default CodeReferences

