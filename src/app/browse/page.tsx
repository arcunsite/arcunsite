"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/lander/header";
import PortfolioCard from "@/components/browse/portfolio-card";
import { portfolios } from "@/components/browse/data";
import type { Portfolio } from "@/components/browse/types";

const QuickViewModal = dynamic(
  () => import("@/components/browse/quick-view-modal"),
  {
    ssr: false,
  },
);

export default function AppPage() {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selected, setSelected] = useState<Portfolio | null>(null);

  const handleQuickView = useCallback((item: Portfolio) => {
    setSelected(item);
    setQuickViewOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl mb-4">
              Discover Creative Portfolios
            </h1>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Explore exceptional work from talented creators. Each portfolio
              showcases unique approaches to design, development, and creative
              problem-solving.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                item={portfolio}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
        </div>
      </div>
      {quickViewOpen && selected && (
        <QuickViewModal
          open={quickViewOpen}
          onOpenChange={setQuickViewOpen}
          portfolio={selected}
          modal={false}
        />
      )}
    </div>
  );
}
