# GitChat

GitChat is an intelligent collaboration tool that helps teams understand and interact with their GitHub repositories through AI-powered features. It provides commit analysis, codebase Q&A, and team collaboration capabilities.

## 🌟 Features

### 1. Repository Analysis
- Automatic repository scanning and indexing
- AI-powered commit summaries and analysis
- Code structure understanding and documentation

### 2. AI-Powered Q&A
- Ask questions about your codebase
- Context-aware responses using both Gemini and OpenAI
- Code reference support with syntax highlighting

### 3. Team Collaboration
- Multi-user support with Clerk authentication
- Team member invitations
- Shared project access and history

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Backend**: tRPC, Prisma
- **Database**: PostgreSQL with Vector extensions
- **AI/ML**: Google Gemini, OpenAI
- **Authentication**: Clerk
- **Deployment**: Docker, Fly.io
- **Storage**: Firebase Storage

## 📋 Prerequisites

- Node.js 18+ or Bun 1.1.32+
- PostgreSQL with Vector extension support
- Google Gemini API key
- OpenAI API key
- Clerk account
- Firebase project

## 🚀 Getting Started

1. Clone the repository:
bash
git clone <repository-url>
cd GitChat
  
2. Install dependencies:
bash
bun install
or
npm install

   
3. Set up environment variables:
DATABASE_URL=postgresql://...
GEMINI_API_KEY=...
OPENAI_API_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_URL=http://localhost:3000

4. Set up the database:
bash
bun prisma db push

5. Start the development server:
bash
bun dev
or
npm run dev



## 🔄 Core Workflows

1. **Repository Integration**
   - User creates a new project with GitHub repository URL
   - System indexes the repository using GitHub API
   - Code is analyzed and embedded using AI models

2. **Q&A System**
   - Questions are processed against embedded codebase
   - Relevant code sections are retrieved using vector similarity
   - AI generates contextual responses with code references

3. **Commit Analysis**
   - New commits are automatically detected
   - Diff analysis is performed using AI
   - Summaries are generated and stored




<img width="1792" alt="Screenshot 2024-12-01 at 3 26 22 PM" src="https://github.com/user-attachments/assets/37bb8321-59cd-45cf-9be0-96ce26601433">

<img width="1792" alt="Screenshot 2024-12-01 at 2 56 53 PM" src="https://github.com/user-attachments/assets/76c8a7d3-c9bc-41f4-bf7d-5be827f2b8eb">

<img width="1792" alt="Screenshot 2024-12-01 at 3 25 22 PM" src="https://github.com/user-attachments/assets/b1d47d8e-e064-48d1-9e82-8a64bd6689c6">





