"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center cursor-default">
        <div className="relative w-full h-[360px]">
          <Image
            src="/banner.avif"
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl border border-neutral-900 z-0"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-10 z-10">
            <h1 className="text-7xl font-bold text-neutral-100 mb-4">
              Stand Out. Get Hired.
            </h1>

            <p className="max-w-xl text-neutral-200 text-lg mb-6">
              Create a portfolio that is truly yours, distinctive, beautiful,
              and built to impress. Showcase your best work and stand out to
              employers.
            </p>

            <div className="flex">
              <Button
                size="sm"
                variant="secondary"
                className="bg-gradient-to-b from-neutral-100 to-neutral-400 hover:bg-neutral-300 active:scale-95 transform transition-all duration-200 text-neutral-950 cursor-pointer"
              >
                <ArrowRight size={20} weight="fill" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
