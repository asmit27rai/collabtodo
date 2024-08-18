"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <div className="relative w-full items-center justify-center hidden sm:flex">
      <NavbarD className="top-2" />
    </div>
  );
}

function NavbarD({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="flex justify-between items-center bg-black p-2 rounded-full border border-white shadow-lg">
        <Menu setActive={setActive} className="flex-1 flex justify-center">
          <MenuItem setActive={setActive} active={active} item="CollabTodo">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Home"
                href="/"
                description="Back To Home"
              />
              <ProductItem
                title="Organisations"
                href="/organisations"
                description="Have a look at all the organisations"
              />
              <ProductItem
                title="MYTodo"
                href="/mytodo"
                description="Here Is Your Todo List"
              />
              <ProductItem
                title="Friends"
                href="/friends"
                description="Look At Your Friends"
              />
            </div>
          </MenuItem>
        </Menu>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="ml-4"
        >
          <UserButton />
        </motion.div>
      </div>
    </div>
  );
}
