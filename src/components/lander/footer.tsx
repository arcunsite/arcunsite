"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center cursor-default">
      <div className="relative w-full h-[360px]">
        <Image
          src="/banner.avif"
          alt="Footer Banner"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl border border-neutral-900 z-0"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-10 z-10">
          <h2 className="text-5xl font-bold text-neutral-100 mb-4">
            Feature Your Site
          </h2>

          <p className="max-w-xl text-neutral-200 text-lg mb-6">
            If you want to contribute a portfolio or feature your own, submit it
            to our GitHub and join the community.
          </p>

          <Button
            onClick={() =>
              window.open(
                "https://github.com/arcunsite/arcunsite/blob/main/CONTRIBUTING.md",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="bg-gradient-to-b from-neutral-100 to-neutral-400 hover:bg-neutral-300 active:scale-95 transform transition-all duration-200 text-neutral-950 cursor-pointer"
          >
            <ArrowUpRight size={18} weight="fill" />
            Contribute
          </Button>
        </div>
      </div>
    </footer>
  );
}
