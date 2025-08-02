"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, BookOpen, Speedometer } from "@phosphor-icons/react";

const features = [
  {
    title: "Aesthetics - Interface",
    description:
      "Consistent palettes, responsive layouts, and subtle interactions " +
      "for a polished user experience.",
    icon: <Palette size={20} weight="fill" className="text-indigo-400" />,
  },
  {
    title: "Narrative - Showcase",
    description:
      "Clear headlines, structured project highlights, and CTAs that guide " +
      "visitors to your best work.",
    icon: <BookOpen size={20} weight="fill" className="text-teal-400" />,
  },
  {
    title: "Optimization - Access",
    description:
      "Optimized load speed, accessible markup, and ATS/SEO-friendly output " +
      "for better reach.",
    icon: <Speedometer size={20} weight="fill" className="text-rose-400" />,
  },
];

export default function HeroCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-transparent border border-neutral-900 
                     hover:border-neutral-800 transition-all duration-200"
        >
          <CardHeader className="">
            <div
              className="w-12 h-12 bg-neutral-900 rounded-lg flex 
                         items-center justify-center border border-neutral-800 mb-4"
            >
              <div className="text-neutral-100">{feature.icon}</div>
            </div>
            <CardTitle className="text-lg font-semibold text-neutral-100">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed text-neutral-400">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
