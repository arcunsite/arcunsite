"use client";

import { JSX } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { CursorClick, PaintRoller, GlobeSimple } from "@phosphor-icons/react";

type Step = {
  title: string;
  description: string;
  estimate: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    title: "Browse Sites",
    description:
      "Pick a template that matches your style. Each layout is clean and simple. Start quickly with a solid base.",
    estimate: "2m",
    icon: <CursorClick size={32} className="text-pink-700 mb-4" />,
  },
  {
    title: "Personalize Them",
    description:
      "Upload your projects and short notes. Adjust colors, fonts, and sections. Keep it tidy and on-brand.",
    estimate: "5-10m",
    icon: <PaintRoller size={32} className="text-pink-700 mb-4" />,
  },
  {
    title: "Publish Site",
    description:
      "Export the code or deploy with one click. Your site is fast and reliable. Share the link anytime.",
    estimate: "1m",
    icon: <GlobeSimple size={32} className="text-pink-700 mb-4" />,
  },
];

export default function ProcessPreview(): JSX.Element {
  return (
    <section aria-labelledby="process-title">
      <div className="mx-auto mb-8">
        <h2
          id="process-title"
          className="text-xl max-w-2xl font-semibold tracking-tight text-neutral-100"
        >
          Build, Customize, Publish
        </h2>
        <p className="mt-1 max-w-md text-sm text-neutral-400">
          Launch your portfolio in three straightforward steps: pick a template,
          tailor it to your style, then publish with a single click.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative flex flex-col overflow-hidden rounded-xl border border-neutral-900 bg-black cursor-default"
            >
              <CardHeader className="flex justify-end px-5 pt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Step {index + 1} of {steps.length}
                </div>
              </CardHeader>

              <div className="px-5 flex flex-col items-start">
                {step.icon}
                <CardTitle className="text-2xl text-neutral-100">
                  {step.title}
                </CardTitle>
              </div>

              <CardContent className="px-5 pb-0">
                <p className="text-sm leading-6 text-neutral-300 line-clamp-3">
                  {step.description}
                </p>
              </CardContent>

              <CardFooter className="mt-auto flex items-center justify-end px-5 py-4 text-xs font-semibold">
                <span className="text-neutral-500">
                  Estimated: {step.estimate}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
