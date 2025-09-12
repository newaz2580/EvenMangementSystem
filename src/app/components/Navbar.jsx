"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";   // ✅ Fixed import
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo + Name */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-semibold text-lg">Shadcn</span>
          </a>

          {/* Middle side: Navigation Links (desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-indigo-600">
              Home
            </a>
            <a href="/about" className="text-sm font-medium hover:text-indigo-600">
              About
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-indigo-600">
              Contact
            </a>
          </nav>

          {/* Right side: Buttons + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline">Login</Button>
              <Button>Sign Out</Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}   {/* ✅ Fixed here */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <div className="px-4 py-3 space-y-3">
              <a href="/" className="block text-sm font-medium hover:text-indigo-600">
                Home
              </a>
              <a href="/about" className="block text-sm font-medium hover:text-indigo-600">
                About
              </a>
              <a href="/contact" className="block text-sm font-medium hover:text-indigo-600">
                Contact
              </a>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Sign Out</Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
