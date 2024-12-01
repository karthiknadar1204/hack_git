import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { UserButton } from "@clerk/nextjs"
import SearchBar from "./search-bar"

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full m-2 text-gray-300">
                <div className="flex items-center gap-2 border-gray-800 bg-gray-900 border shadow-lg shadow-gray-900/50 rounded-md p-2 px-4">
                    <SearchBar />
                    <div className="ml-auto"></div>
                    <UserButton />
                </div>
                <div className="h-4"></div>
                <div className="border-gray-800 bg-gray-900 border shadow-lg shadow-gray-900/50 rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

