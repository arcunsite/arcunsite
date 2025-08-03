"use client";

import { JSX } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Sparkle,
  DeviceMobileCamera,
  Speedometer,
  MagnifyingGlass,
  Shield,
  GlobeSimple,
} from "@phosphor-icons/react";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
  plan: "free" | "pro"; // free = included, pro = behind paywall
};

const features: Feature[] = [
  {
    title: "Modern Site",
    description:
      "Your portfolio will look fresh and professional. Clean layouts and colors that actually make sense.",
    icon: <Sparkle size={32} className="text-pink-700 mb-4" />,
    plan: "free",
  },
  {
    title: "Mobile Responsive",
    description:
      "Whether someone's checking you out on their phone, same great experience everywhere.",
    icon: <DeviceMobileCamera size={32} className="text-pink-700 mb-4" />,
    plan: "free",
  },
  {
    title: "Speed Optimized",
    description:
      "Sites load fast so visitors stick around to see your awesome work. Instant gratification guaranteed.",
    icon: <Speedometer size={32} className="text-pink-700 mb-4" />,
    plan: "free",
  },
  {
    title: "SEO Optimized",
    description:
      "Recruiters Google your name, guess whose portfolio shows up first? We make sure you're impossible to miss online.",
    icon: <MagnifyingGlass size={32} className="text-pink-700 mb-4" />,
    plan: "pro",
  },
  {
    title: "Secure Hosting",
    description:
      "Sleep easy knowing your site is protected and always online when opportunity knocks. Powered by GoDaddy.",
    icon: <Shield size={32} className="text-pink-700 mb-4" />,
    plan: "pro",
  },
  {
    title: "Subdomain Access",
    description:
      "Get a clean URL instead of a messy link with random numbers. Looks pro and easy to remember.",
    icon: <GlobeSimple size={32} className="text-pink-700 mb-4" />,
    plan: "pro",
  },
];

export default function FeatureCards(): JSX.Element {
  return (
    <section aria-labelledby="features-title">
      <div className="mx-auto mb-8">
        <h2
          id="features-title"
          className="text-lg max-w-2xl font-semibold tracking-tight text-neutral-100"
        >
          Complete Portfolio Toolkit
        </h2>
        <p className="mt-1 max-w-md text-sm text-neutral-400">
          Expert-grade features designed to spotlight your skills and outshine
          the competition.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const isFree = feature.plan === "free";
            return (
              <Card
                key={index}
                className="relative flex flex-col overflow-hidden rounded-xl border border-neutral-900 bg-black cursor-default"
              >
                <CardHeader className="flex justify-end px-5 pt-6 pb-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Feature {index + 1} of {features.length}
                  </div>
                </CardHeader>

                <div className="px-5 flex flex-col items-start">
                  {feature.icon}
                  <CardTitle className="text-2xl text-neutral-100">
                    {feature.title}
                  </CardTitle>
                </div>

                <CardContent className="px-5 pb-0">
                  <p className="text-sm leading-6 text-neutral-300 line-clamp-3">
                    {feature.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto flex items-center justify-end px-5 py-4 text-xs font-semibold">
                  <span className="text-neutral-500">
                    {isFree ? "Included" : "Paid Feature"}
                  </span>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
