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

export default function DocumentationPage() {
  return (
    <div>
      <Header />
      <div className="pt-18 pb-18">
        <div className="max-w-6xl mx-auto px-8">
          <div className="p-2 border border-neutral-900 rounded-2xl space-y-2">
            <div className="p-8 border border-neutral-900 rounded-2xl space-y-2">
              <h1 className="text-lg font-semibold tracking-tight text-neutral-100">
                Documentation
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Learn how to use and extend arcunsite. These sections are
                placeholders—replace them with your real docs structure.
              </p>
            </div>

            <div className="p-4 md:p-8 border border-neutral-900 rounded-2xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-neutral-100">
                      Getting Started
                    </CardTitle>
                    <CardDescription>
                      Install dependencies, run the dev server, and understand
                      the project layout.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="secondary">Setup</Badge>
                    <Badge variant="outline">CLI</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="#">Read more</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-neutral-100">
                      Components & Theming
                    </CardTitle>
                    <CardDescription>
                      Use the UI primitives and maintain a consistent visual
                      style across pages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="secondary">UI</Badge>
                    <Badge variant="outline">Theme</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="#">View components</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-neutral-100">
                      Deployment
                    </CardTitle>
                    <CardDescription>
                      Production builds, environment variables, and best
                      practices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="#">Learn more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
