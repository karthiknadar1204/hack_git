'use client'

import useProject from '@/hooks/use-project'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AskQuestionCard from './ask-question-card'
import CommitLog from './commit-log'
import ArchiveButton from './archive-button'
import InviteButton from './invite-button'
import TeamMembers from './team-members'

const DashboardPage = () => {
    const { project } = useProject()

    return (
        <div className="min-h-screen bg-black text-gray-300 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="w-full lg:w-auto p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg transition-all duration-300 hover:shadow-blue-900/20">
                        <div className="flex items-center">
                            <Github className="h-6 w-6 text-blue-400" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-300">
                                    Linked to{" "}
                                    <Link
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                        href={project?.githubUrl ?? ''}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project?.githubUrl}
                                        <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2">
                        <AskQuestionCard />
                    </div>
                    <div className="space-y-8">
                        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-blue-400">Quick Actions</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <TeamMembers />
                                </div>
                                <div className="col-span-1">
                                    <InviteButton />
                                </div>
                                <div className="col-span-1">
                                    <ArchiveButton />
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => window.open(project?.githubUrl ?? '', '_blank')}
                                    className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 col-span-2"
                                >
                                    <Github className="h-5 w-5 mr-2" />
                                    Repo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-100">Recent Commits</h2>
                    <CommitLog />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
