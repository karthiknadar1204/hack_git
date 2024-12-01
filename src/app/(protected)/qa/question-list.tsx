'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import useProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import MDEditor from "@uiw/react-md-editor"
import React from 'react'
import CodeReferences from "../dashboard/code-references"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Loader2, MessageCircle } from 'lucide-react'
import AskQuestionCard from "../dashboard/ask-question-card"

const QuestionList = () => {
  const { projectId } = useProject()
  const { data: questions, isLoading } = api.question.getAllQuestions.useQuery({ projectId })
  const [questionIdx, setQuestionIdx] = React.useState(0)
  const question = questions?.[questionIdx]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-blue-400 w-8 h-8" />
      </div>
    )
  }

  return (
    <Sheet>
      <div className="space-y-8 bg-gray-900 p-6 rounded-xl shadow-lg">
        <AskQuestionCard />
        
        <div>
          <h1 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
            <MessageCircle className="w-6 h-6 mr-2" />
            Saved Questions
          </h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1">
            {questions?.map((question, idx) => (
              <SheetTrigger key={question.id} onClick={() => setQuestionIdx(idx)}>
                <div className="flex items-start gap-4 bg-gray-800 rounded-lg p-4 shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <Image 
                    src={question.user.imageUrl ?? '/default-avatar.png'} 
                    alt="Avatar" 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-blue-500"
                  />
                  <div className="text-left flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-gray-100 line-clamp-1 text-lg font-medium">
                        {question.question}
                      </p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatDistanceToNow(question.createdAt, {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </SheetTrigger>
            ))}
          </div>
        </div>
      </div>

      {question && (
        <SheetContent className="sm:max-w-[80vw] bg-gray-900 text-gray-100 border-l border-gray-700">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-blue-400 mb-4">{question.question}</SheetTitle>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <MDEditor.Markdown 
                source={question.answer} 
                className='flex-1 w-full !h-full max-h-[50vh] overflow-auto custom-ref text-gray-300'
              />
            </div>
            <CodeReferences filesReferenced={(question.filesReferenced ?? []) as any} />
          </SheetHeader>
        </SheetContent>
      )}
    </Sheet>
  )
}

export default QuestionList

