"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Portfolio } from "./types";
import { useMemo } from "react";

interface QuickViewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  portfolio?: Portfolio | null;
  modal?: boolean;
}

export default function QuickViewModal({
  open,
  onOpenChange,
  portfolio,
  modal = true,
}: QuickViewModalProps) {
  const galleryImages = useMemo(() => {
    if (!portfolio) return [];
    const unique = Array.from(
      new Set([portfolio.imageSrc, ...(portfolio.images ?? [])]),
    );
    return unique.slice(0, 6);
  }, [portfolio]);

  if (!portfolio) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={modal}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {/* Media */}
          <div className="md:col-span-3 p-4 md:p-6 border-r border-neutral-800">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={portfolio.imageSrc}
                alt={`${portfolio.title} cover`}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
                {galleryImages.slice(1).map((img) => (
                  <div
                    key={img}
                    className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-neutral-800"
                  >
                    <Image
                      src={img}
                      alt="Gallery image"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-2 p-6 space-y-5">
            <DialogHeader>
              <DialogTitle className="text-neutral-100">
                {portfolio.title}
              </DialogTitle>
              <DialogDescription>
                <span className="text-neutral-300">{portfolio.creator}</span>
                <span className="text-neutral-500"> • {portfolio.role}</span>
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {portfolio.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolio.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="h-px bg-neutral-800" />

            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                className="bg-neutral-100 text-neutral-900 hover:bg-white"
              >
                <Link href={`/browse/${portfolio.id}`}>Open Full Details</Link>
              </Button>
              {portfolio.siteUrl ? (
                <Button
                  asChild
                  variant="outline"
                  className="border-neutral-700 text-neutral-200 hover:bg-neutral-800"
                >
                  <a
                    href={portfolio.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site
                  </a>
                </Button>
              ) : (
                <Button
                  disabled
                  variant="outline"
                  className="border-neutral-800 text-neutral-500"
                >
                  Live Site Unavailable
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
