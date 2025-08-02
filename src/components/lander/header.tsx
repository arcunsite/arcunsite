"use client";

import { CirclesThree } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-8">
        <div className="flex items-center text-md gap-8">
          <Link href="/" className="flex items-center gap-2">
            <CirclesThree
              size={24}
              weight="fill"
              className="text-neutral-100"
            />
            <span className="font-medium text-neutral-100">arcunsite</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <Link
              href="#"
              className="hover:text-neutral-100 transition-colors duration-200"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="hover:text-neutral-100 transition-colors duration-200"
            >
              Showcase
            </Link>
            <Link
              href="#"
              className="hover:text-neutral-100 transition-colors duration-200"
            >
              Contribute
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
