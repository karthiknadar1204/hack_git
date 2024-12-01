import "@/styles/globals.css";
import TopLoader from "@/components/top-loader";
import { Toaster } from "sonner";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "GitChat",
  description: "Chat with your GitHub repositories",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <body className="bg-gray-900 text-gray-100">
          <TopLoader />
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Toaster 
            theme="dark" 
            toastOptions={{
              style: {
                background: '#1F2937',
                color: '#F3F4F6',
                border: '1px solid #374151',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}

