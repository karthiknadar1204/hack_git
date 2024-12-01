'use client'

import { Button } from "@/components/ui/button";
import useProject from "@/hooks/use-project";
import useRefetch from "@/hooks/use-refetch";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { Archive } from 'lucide-react';

export default function ArchiveButton() {
    const archiveProject = api.project.archiveProject.useMutation();
    const { project } = useProject();
    const refetch = useRefetch()

    const handleArchive = () => {
        const confirmed = window.confirm('Are you sure you want to archive this project?');
        if (!confirmed) return;
        archiveProject.mutate({ projectId: project?.id ?? '' }, {
            onSuccess: () => {
                toast.success('Project archived successfully');
                refetch()
            },
            onError: () => {
                toast.error('Failed to archive project');
            },
        })
    };

    return (
        <Button 
            variant={'outline'} 
            isLoading={archiveProject.isPending} 
            onClick={handleArchive}
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 transition-all duration-200 transform hover:scale-105"
        >
            <Archive className="w-5 h-5 mr-2" />
            Archive
        </Button>
    )
}

