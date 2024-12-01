'use client'

import { api } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'lucide-react'
import useRefetch from '@/hooks/use-refetch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Spotlight } from '@/components/Spotlight'
import { Meteors } from '@/components/meteors'

type FormInput = {
  repoUrl: string
  projectName: string
  githubToken?: string
}

const CreateProjectPage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>()
  const linkRepo = api.project.create.useMutation()
  const router = useRouter()
  const refetch = useRefetch()

  const onSubmit = async (data: FormInput) => {
    linkRepo.mutate(
      {
        githubUrl: data.repoUrl,
        name: data.projectName,
        githubToken: data.githubToken,
      },
      {
        onSuccess: () => {
          toast.success("Project created successfully")
          router.push(`/dashboard`)
          refetch()
          reset()
        },
        onError: () => {
          toast.error("Failed to create project")
        },
      }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative overflow-hidden">
      <Spotlight className="top-[-20%] left-0" fill="blue" />
      <Meteors number={20} className="!absolute" />
      <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-lg relative z-10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-white">Create Project</CardTitle>
          <CardDescription className="text-gray-400">
            Link your GitHub repository to GitChat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="projectName" className="text-sm font-medium text-gray-300">
                Project Name
              </label>
              <Input
                id="projectName"
                {...register("projectName", { required: true })}
                placeholder="Enter project name"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="repoUrl" className="text-sm font-medium text-gray-300">
                GitHub Repository URL
              </label>
              <Input
                id="repoUrl"
                {...register("repoUrl", { required: true })}
                type="url"
                placeholder="https://github.com/username/repo"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="githubToken" className="text-sm font-medium text-gray-300">
                GitHub Token (optional)
              </label>
              <Input
                id="githubToken"
                {...register("githubToken")}
                type="password"
                placeholder="For private repositories"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              disabled={linkRepo.isPending}
            >
              {linkRepo.isPending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Project...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Create Project <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateProjectPage

