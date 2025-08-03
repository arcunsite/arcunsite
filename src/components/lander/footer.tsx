"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center cursor-default">
      <div className="relative w-full h-[360px]">
        <Image
          src="/banner.png"
          alt="Footer Banner"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl border border-neutral-900 z-0"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-10 z-10">
          <p className="max-w-xl text-neutral-200 text-lg mb-6">
            If you want to contribute a portfolio or feature your own, submit it
            to our GitHub and join the community.
          </p>

          <Link
            href="https://github.com/arcunsite/arcunsite/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-300 transition-colors duration-200 font-medium text-neutral-950 cursor-pointer rounded-md px-3 py-2 text-sm"
          >
            Contribute on GitHub
            <ArrowUpRight size={18} weight="fill" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
