import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import Sidebar from "@/components/SIdebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CollabTodo",
  description: "Collab Here For Work...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body>
          <header>
            <SignedIn>
              <Sidebar />
              <main className="mt-8 mx-4">{children}</main>
            </SignedIn>
          </header>
        </body>
      </html>
    </ClerkProvider>
  );
}
