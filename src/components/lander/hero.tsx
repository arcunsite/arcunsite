"use client";

import Image from "next/image";
import HeroCard from "./hero-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GithubLogo } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="p-8 border border-neutral-900 rounded-2xl">
      <div className="flex justify-center items-center">
        <div className="relative w-full h-[360px]">
          <Image
            src="/banner.png"
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl border border-neutral-900 z-0"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-10 z-10">
            {/* <Button 
                variant="secondary" 
                size="sm" 
                className="mb-4 bg-neutral-950 text-neutral-200 border border-neutral-700 backdrop-blur-sm"
                disabled
              >
                under development!
              </Button> */}

            <h1 className="text-7xl font-bold text-neutral-100 mb-4">
              Stand Out. Get Hired.
            </h1>

            <p className="max-w-xl text-neutral-200 text-lg mb-6">
              Create a portfolio that's truly yours, distinctive, beautiful, and
              built to impress. Showcase your best work and stand out to
              employers.
            </p>

            <div className="flex gap-4">
              <Button
                size="sm"
                variant="secondary"
                className="bg-neutral-100 hover:bg-neutral-300 transition-colors duration-200 text-neutral-950 cursor-pointer"
              >
                <ArrowRight size={20} weight="fill" />
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-none hover:bg-transparent text-neutral-100 hover:text-neutral-300 transition-colors duration-200 cursor-pointer"
              >
                <GithubLogo size={20} weight="fill" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <HeroCard />
      </div>
    </div>
  );
}
