"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function PortfolioPreview() {
  return (
    <section aria-labelledby="portfolio-title">
      <div className="mx-auto mb-8">
        <h2
          id="portfolio-title"
          className="text-lg max-w-2xl font-semibold tracking-tight text-neutral-100"
        >
          Designed to Impress
        </h2>
        <p className="mt-1 max-w-md text-sm text-neutral-400">
          See how your portfolio can transform into a polished, captivating
          digital presence.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="relative overflow-hidden rounded-xl border border-neutral-900 bg-black">
            <div className="relative w-full aspect-square">
              <Image
                src="/1.avif"
                alt="Portfolio Example 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl" />
          </Card>

          <Card className="relative overflow-hidden rounded-xl border border-neutral-900 bg-black">
            <div className="relative w-full aspect-square">
              <Image
                src="/2.avif"
                alt="Portfolio Example 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl" />
          </Card>
        </div>
      </div>
    </section>
  );
}
