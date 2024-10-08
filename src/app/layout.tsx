import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SignedIn } from "@clerk/nextjs";
import Sidebar from "@/components/SideBar";
import { Provider } from "./Provider";
import { ModalProvider } from "@/components/ui/animated-modal";

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
    <Provider>
      <ModalProvider>
        <html lang="en">
          <body>
            <header className="flex flex-row overflow-hidden">
              <SignedIn>
                <Sidebar />
                <main className="flex-1 ml-6 p-0 sm:p-8 md:p-8">
                  {children}
                </main>
              </SignedIn>
            </header>
          </body>
        </html>
      </ModalProvider>
    </Provider>
  );
}
