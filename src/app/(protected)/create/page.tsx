'use client'
import { api } from '@/trpc/react';
import { useRouter } from 'next/navigation';
import React, { useReducer, useRef } from 'react'
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { AlertTriangle, ArrowRight, FileText, Github, Info, Key } from 'lucide-react';
import useRefetch from '@/hooks/use-refetch';
import { createCheckoutSession } from '@/lib/stripe';


type FormInput = {
    repoUrl: string
    projcetName: string
    githubToken?: string
}

const CreateProjectPage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const linkRepo = api.project.create.useMutation();
    const router = useRouter()
    const refetch = useRefetch()

    const onSubmit = async (data: FormInput) => {
        linkRepo.mutate({
            githubUrl: data.repoUrl,
            name: data.projcetName,
            githubToken: data.githubToken,
        }, {
            onSuccess: () => {
                toast.success("Project created successfully");
                router.push(`/dashboard`)
                refetch()
                reset()
            },
            onError: () => {
                toast.error("Failed to create project");
            },
        });
    };

    return (
        <div className='flex items-center gap-12 h-full justify-center'>
            <img src='/undraw_github.svg' className='h-56 w-auto' />
            <div>
                <div>
                    <h1 className='font-semibold text-2xl'>Link your GitHub Repository</h1>
                    <p className='text-sm text-muted-foreground'>
                        Enter the URL of your GitHub repository to link it to GitChat.
                    </p>
                </div>
                <div className="h-4"></div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            icon={FileText}
                            required
                            {...register("projcetName", { required: true })}
                            placeholder="Project Name"
                        />
                        <div className="h-2"></div>
                        <Input
                            icon={Github}
                            {...register("repoUrl", { required: true })}
                            required
                            type='url'
                            placeholder="Github Repository URL"
                        />
                        <div className="h-2"></div>
                        <Input
                            icon={Key}
                            {...register("githubToken")}
                            placeholder="GitHub Token (optional, for private repositories)"
                        />
                        <div className="h-4"></div>
                        <Button type="submit" isLoading={linkRepo.isPending}>
                            Create Project <ArrowRight className='size-4' />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProjectPage