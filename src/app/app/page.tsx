import Image from "next/image";
import Link from "next/link";

import Header from "@/components/lander/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type SamplePortfolio = {
  id: string;
  title: string;
  role: string;
  tags: string[];
  imageSrc: string;
  summary: string;
};

const samplePortfolios: SamplePortfolio[] = [
  {
    id: "p1",
    title: "Minimalist Product Design",
    role: "Product Designer",
    tags: ["UI/UX", "Web App", "2024"],
    imageSrc: "/1.avif",
    summary:
      "A clean product landing experience that emphasizes clarity and conversion.",
  },
  {
    id: "p2",
    title: "Creative Developer Showcase",
    role: "Frontend Engineer",
    tags: ["Next.js", "Animations", "Case Study"],
    imageSrc: "/2.avif",
    summary:
      "An interactive portfolio highlighting motion, performance, and craft.",
  },
  {
    id: "p3",
    title: "Brand Storytelling Microsite",
    role: "Visual Designer",
    tags: ["Brand", "Story", "2025"],
    imageSrc: "/1.avif",
    summary:
      "A narrative-led microsite that blends typography, layout, and imagery.",
  },
  {
    id: "p4",
    title: "SaaS Dashboard Redesign",
    role: "Design Engineer",
    tags: ["Dashboard", "Systems", "UI Library"],
    imageSrc: "/2.avif",
    summary:
      "A modular dashboard system with a consistent component design language.",
  },
];

export default function AppPage() {
  return (
    <div>
      <Header />
      <div className="pt-18 pb-18">
        <div className="max-w-6xl mx-auto px-8">
          <div className="p-2 border border-neutral-900 rounded-2xl space-y-2">
            <div className="p-8 border border-neutral-900 rounded-2xl space-y-2">
              <h1 className="text-lg font-semibold tracking-tight text-neutral-100">
                Sample Portfolios
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Explore example projects that demonstrate structure, polish, and
                consistency. Replace these with your own real portfolio entries
                when you are ready.
              </p>
            </div>

            <div className="p-4 md:p-8 border border-neutral-900 rounded-2xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {samplePortfolios.map((item) => (
                  <Card
                    key={item.id}
                    className="relative overflow-hidden rounded-xl border border-neutral-900 bg-black"
                  >
                    <div className="relative w-full aspect-video">
                      <Image
                        src={item.imageSrc}
                        alt={`${item.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                        className="rounded-t-xl"
                        priority={false}
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-base text-neutral-100">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-400">
                        {item.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{item.role}</Badge>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </CardContent>

                    <CardFooter className="justify-between">
                      <div className="text-xs text-neutral-500">
                        Placeholder content
                      </div>
                      <Button asChild size="sm">
                        <Link href="#">View details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
