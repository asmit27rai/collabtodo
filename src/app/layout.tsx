import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn } from '@clerk/nextjs'
import { Navbar } from "@/components/Navbar";
import { SidebarDemo } from "@/components/SideBar";

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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>
          <header>
            <SignedIn>
              <Navbar />
              <SidebarDemo />
              <main className="sm:pt-28 sm:px-10 md:pt-10 md:px-30">{children}</main>
            </SignedIn>
          </header>
        </body>
      </html>
    </ClerkProvider>
  );
}
