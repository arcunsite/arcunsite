import { Portfolio } from "./types";

export const portfolios: Portfolio[] = [
  {
    id: "p1",
    title: "good portfolio",
    creator: "Sarah Chen",
    imageSrc: "/1.avif",
    description:
      "A clean product landing experience that emphasizes clarity and conversion. This project focused on reducing cognitive load while maintaining visual interest through purposeful whitespace and strategic typography choices.",
    images: ["/1.avif", "/2.avif", "/1.avif"],
    siteUrl: "https://example.com/minimalist-product-design",
  },
  {
    id: "p2",
    title: "ghazta portfolio",
    creator: "Marcus Rodriguez",
    imageSrc: "/3.avif",
    description:
      "An interactive portfolio highlighting motion, performance, and craft. Built with modern web technologies to create immersive experiences that tell stories through code and animation.",
    images: ["/2.avif", "/1.avif", "/2.avif"],
    siteUrl: "https://example.com/creative-developer-showcase",
  },
];

export function getPortfolioById(id: string): Portfolio | undefined {
  return portfolios.find((p) => p.id === id);
}
