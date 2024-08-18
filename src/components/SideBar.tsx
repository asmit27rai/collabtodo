"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconHome,
  IconBriefcase,
  IconChecklist,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Organisations",
      href: "/organisations",
      icon: (
        <IconBriefcase className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "MYTodo",
      href: "/mytodo",
      icon: (
        <IconChecklist className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Friends",
      href: "/friends",
      icon: (
        <IconUsers className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} className="fixed inset-0 bg-black text-white sm:hidden">
      <SidebarBody className="flex flex-col h-screen p-4 justify-between bg-black border border-white rounded-full">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-4">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={{
                  ...link,
                  icon: (
                    <div className="flex items-center justify-center h-6 w-6 bg-gray-800 rounded-full shadow-md">
                      {link.icon}
                    </div>
                  ),
                }}
              />
            ))}
          </div>
          <div className="mt-auto flex flex-col items-center">
            <UserButton
              afterSignOutUrl="/"
              appearance={{ elements: { userButton: 'text-white' } }}
            />
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-lg text-white py-2 relative z-20"
    >
      <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white whitespace-pre"
      >
        CollabTodo
      </motion.span>
    </Link>
  );
}

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-lg text-white py-2 relative z-20"
    >
      <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
    </Link>
  );
}
