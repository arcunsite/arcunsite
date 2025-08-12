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

type ShowcaseItem = {
  id: string;
  title: string;
  tags: string[];
  imageSrc: string;
  blurb: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "s1",
    title: "Portfolio Layout A",
    tags: ["Case Study", "Layout"],
    imageSrc: "/1.avif",
    blurb: "Clean layout focusing on storytelling and readability.",
  },
  {
    id: "s2",
    title: "Portfolio Layout B",
    tags: ["Visual", "Grid"],
    imageSrc: "/2.avif",
    blurb: "Image-led design showcasing visual craft and detail.",
  },
];

export default function ShowcasePage() {
  return (
    <div>
      <Header />
      <div className="pt-18 pb-18">
        <div className="max-w-6xl mx-auto px-8">
          <div className="p-2 border border-neutral-900 rounded-2xl space-y-2">
            <div className="p-8 border border-neutral-900 rounded-2xl space-y-2">
              <h1 className="text-lg font-semibold tracking-tight text-neutral-100">
                Showcase
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl">
                A small set of example layouts built with the same design
                system—replace with your real showcases.
              </p>
            </div>

            <div className="p-4 md:p-8 border border-neutral-900 rounded-2xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {showcaseItems.map((item) => (
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
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base text-neutral-100">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-400">
                        {item.blurb}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </CardContent>
                    <CardFooter className="justify-end">
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
