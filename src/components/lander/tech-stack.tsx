"use client";

import { JSX } from "react";
import {
  astroIcon,
  nextIcon,
  tailwindIcon,
  biomeIcon,
  vercelIcon,
} from "./icons";

type Partner = {
  name: string;
  icon: React.ComponentType<unknown>;
  description: string;
};

const techPartners: Partner[] = [
  {
    name: "Astro",
    icon: astroIcon,
    description: "Zero-JS by default architecture\nfor lightning-fast websites",
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description:
      "Powers the platform dashboard\nand template customization engine",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    description: "Enables instant theme switching\nand consistent design",
  },
  {
    name: "Biome",
    icon: biomeIcon,
    description: "Enforces code quality standards\nacross all templates",
  },
  {
    name: "Vercel",
    icon: vercelIcon,
    description: "One-click deployment integration\nfor instant deployment",
  },
];

export default function TechStack(): JSX.Element {
  const iconTransforms = [
    "translateY(0px)",
    "translateY(-4px)",
    "translateY(6px)",
    "translateY(-2px)",
    "translateY(7px)",
  ];

  return (
    <section aria-labelledby="tech-title">
      <div className="mx-auto mb-8">
        <h2
          id="tech-title"
          className="text-lg max-w-2xl font-semibold tracking-tight text-neutral-100"
        >
          Powered by Proven Technologies
        </h2>
        <p className="mt-1 max-w-md text-sm text-neutral-400">
          Harness industry-leading tools for lightning-fast builds, maintainable
          code, and one-click deployments.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {techPartners.slice(0, 3).map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="relative flex flex-col overflow-hidden rounded-xl border border-neutral-900 bg-black cursor-default"
              >
                <div className="flex justify-end px-5 pt-6 pb-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Tech {index + 1} of {techPartners.length}
                  </div>
                </div>

                <div className="px-5 flex flex-col items-start">
                  <div
                    className="text-pink-700 mb-4 transition-transform duration-200 will-change-transform"
                    style={{ transform: iconTransforms[index] }}
                    aria-hidden
                  >
                    <Icon />
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <p className="text-sm leading-6 text-neutral-300 whitespace-pre-line">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-3xl md:mx-auto">
          {techPartners.slice(3).map((partner, i) => {
            const actualIndex = i + 3;
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="relative flex flex-col overflow-hidden rounded-xl border border-neutral-900 bg-black cursor-default"
              >
                <div className="flex justify-end px-5 pt-6 pb-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Tech {actualIndex + 1} of {techPartners.length}
                  </div>
                </div>

                <div className="px-5 flex flex-col items-start">
                  <div
                    className="text-pink-700 mb-4 transition-transform duration-200 will-change-transform"
                    style={{ transform: iconTransforms[actualIndex] }}
                    aria-hidden
                  >
                    <Icon />
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <p className="text-sm leading-6 text-neutral-300 whitespace-pre-line">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
