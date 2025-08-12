"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Portfolio } from "./types";

interface PortfolioCardProps {
  item: Portfolio;
  onQuickView?: (item: Portfolio) => void;
}

function PortfolioCardComponent({ item, onQuickView }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950 transition-all duration-300 hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-900/20">
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Title only for a minimal look */}
        <h4 className="text-base font-medium text-neutral-200">{item.title}</h4>

        {/* Actions */}
        <div className="pt-1 grid grid-cols-2 gap-2">
          <Button
            size="sm"
            className="bg-neutral-100 text-neutral-900 hover:bg-white"
            onClick={() => onQuickView?.(item)}
          >
            Quick View
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-neutral-700 text-neutral-200 hover:bg-neutral-800"
          >
            <Link href={`/browse/${item.id}`}>Open Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const PortfolioCard = memo(PortfolioCardComponent);
export default PortfolioCard;
