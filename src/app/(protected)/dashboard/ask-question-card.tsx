"use client";

import MDEditor from "@uiw/react-md-editor";
import { MarkdownPreviewRef } from "@uiw/react-markdown-preview";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generate } from "./action";
import { readStreamableValue } from "ai/rsc";
import CodeReferences from "./code-references";
import { DownloadIcon, SendIcon } from 'lucide-react';
import { api } from "@/trpc/react";
import useProject from "@/hooks/use-project";
import { toast } from "sonner";

type Props = {};

const AskQuestionCard = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const saveAnswer = api.question.saveAnswer.useMutation();
  const { projectId } = useProject();

  const answerRef = React.useRef<MarkdownPreviewRef>(null);
  const [filesReferenced, setFilesReferenced] = React.useState<
    Awaited<ReturnType<typeof generate>>["filesReferenced"]
  >([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!projectId) return;
    setAnswer("");
    e.preventDefault();
    setIsLoading(true);
    const { output, filesReferenced } = await generate(question, projectId);
    setOpen(true);
    setFilesReferenced(filesReferenced);
    for await (const delta of readStreamableValue(output)) {
      if (delta) {
        setAnswer((prev) => prev + delta);
        const el = document.querySelector(".custom-ref");
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuestion("");
          }
        }}
      >
        <DialogContent className="sm:max-w-[80vw] bg-gray-900 text-gray-100 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <DialogTitle className="text-2xl font-bold text-blue-400">GitChat Response</DialogTitle>
            <Button
              isLoading={saveAnswer.isPending || isLoading}
              variant="outline"
              onClick={() => {
                saveAnswer.mutate(
                  {
                    projectId,
                    question,
                    answer,
                    filesReferenced,
                  },
                  {
                    onSuccess: () => {
                      toast.success("Answer saved");
                    },
                    onError: () => {
                      toast.error("Failed to save answer");
                    },
                  },
                );
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white border-none"
            >
              <DownloadIcon className="h-4 w-4 mr-2" />
              Save Answer
            </Button>
          </div>
          <MDEditor.Markdown
            source={answer}
            className="custom-ref !h-full max-h-[40vh] max-w-[70vw] overflow-scroll bg-gray-800 p-4 rounded-lg text-gray-300"
          />
          <CodeReferences filesReferenced={filesReferenced} />
          <Button onClick={() => setOpen(false)} className="bg-gray-800 hover:bg-gray-700 text-white mt-4">Close</Button>
        </DialogContent>
      </Dialog>
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-blue-900/10">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Ask GitChat</h2>
        <p className="text-gray-400 mb-6">GitChat has knowledge of the codebase</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-500"
            placeholder="Which file should I edit to change the home page?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
          />
          <Button 
            isLoading={isLoading} 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            {isLoading ? "Thinking..." : (
              <>
                <SendIcon className="mr-2 h-5 w-5" />
                Ask GitChat
              </>
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default AskQuestionCard;

