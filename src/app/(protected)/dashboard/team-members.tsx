'use client'
import useProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Users } from 'lucide-react'

const TeamMembers = () => {
    const { projectId } = useProject()
    const { data: members } = api.project.getMembers.useQuery({ projectId })

    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-900/20'>
            <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Team Members
            </h3>
            <div className='flex items-center gap-2'>
                <TooltipProvider>
                    {members?.map((member) => (
                        <Tooltip key={member.id}>
                            <TooltipTrigger>
                                <div className="relative">
                                    <Image 
                                        src={member.user.imageUrl ?? '/default-avatar.png'} 
                                        alt={`Avatar of ${member.user.firstName} ${member.user.lastName}`} 
                                        width={40} 
                                        height={40} 
                                        className="rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110 hover:border-blue-400"
                                    />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm font-medium">{member.user.name}</p>
                                <p className="text-xs text-gray-400">{member.user.email}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    )
}

export default TeamMembers

