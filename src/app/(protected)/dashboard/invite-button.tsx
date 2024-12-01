"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useProject from "@/hooks/use-project";
import React from "react";
import { toast } from "sonner";
import { UserPlus } from 'lucide-react';

const InviteButton = () => {
    const { projectId } = useProject()
    const [open, setOpen] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/join/${projectId}`);
        toast.success("Invite link copied to clipboard!");
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-gray-900 border border-gray-800">
                    <DialogTitle className="text-xl font-semibold text-blue-400">
                        Invite a team member
                    </DialogTitle>
                    <p className="text-sm text-gray-400">
                        Share this link to invite someone to your project:
                    </p>
                    <div className="mt-4 relative">
                        <Input
                            className="pr-20 bg-gray-800 text-gray-300 border-gray-700 focus:border-blue-500"
                            readOnly
                            value={`${process.env.NEXT_PUBLIC_URL}/join/${projectId}`}
                        />
                        <Button
                            className="absolute right-0 top-0 bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={handleCopy}
                        >
                            Copy
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
            <Button 
                onClick={() => setOpen(true)} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 transform hover:scale-105"
            >
                <UserPlus className="w-5 h-5 mr-2" />
                Invite
            </Button>
        </>
    );
};

export default InviteButton;

