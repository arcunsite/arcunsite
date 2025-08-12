import Image from "next/image";
import Link from "next/link";
import Header from "@/components/lander/header";
import { portfolios, getPortfolioById } from "@/components/browse/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolios.map((p) => ({ id: p.id }));
}

export default async function PortfolioPage({ params }: PageProps) {
  const { id } = await params;
  const portfolio = getPortfolioById(id);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-black text-neutral-200">
        <Header />
        <div className="max-w-4xl mx-auto px-6 pt-24">
          <p className="text-neutral-400">Portfolio not found.</p>
          <Button asChild variant="ghost" className="mt-4 text-neutral-300">
            <Link href="/browse">Back to Browse</Link>
          </Button>
        </div>
      </div>
    );
  }

  const gallery = Array.from(
    new Set([portfolio.imageSrc, ...(portfolio.images ?? [])]),
  );

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-800">
              <Image
                src={portfolio.imageSrc}
                alt={`${portfolio.title} cover`}
                fill
                className="object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {gallery.slice(1).map((img) => (
                  <div
                    key={img}
                    className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800"
                  >
                    <Image
                      src={img}
                      alt="Gallery image"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-neutral-100">
                {portfolio.title}
              </h1>
              <p className="text-neutral-300 mt-1">{portfolio.creator}</p>
              <p className="text-neutral-500">{portfolio.role}</p>
            </div>

            <p className="text-neutral-400 leading-relaxed">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                asChild
                className="bg-neutral-100 text-neutral-900 hover:bg-white"
              >
                <a
                  href={portfolio.siteUrl ?? "#"}
                  target={portfolio.siteUrl ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {portfolio.siteUrl
                    ? "View Live Site"
                    : "Live Site Unavailable"}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-neutral-700 text-neutral-200 hover:bg-neutral-800"
              >
                <Link href="/browse">Back to Browse</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
