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

export default function ContributePage() {
  return (
    <div>
      <Header />
      <div className="pt-18 pb-18">
        <div className="max-w-6xl mx-auto px-8">
          <div className="p-2 border border-neutral-900 rounded-2xl space-y-2">
            <div className="p-8 border border-neutral-900 rounded-2xl space-y-2">
              <h1 className="text-lg font-semibold tracking-tight text-neutral-100">
                Contribute
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Help improve arcunsite. These cards outline the typical ways to
                get involved. Replace with your real contribution guide.
              </p>
            </div>

            <div className="p-4 md:p-8 border border-neutral-900 rounded-2xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-neutral-100">
                      Open an Issue
                    </CardTitle>
                    <CardDescription>
                      Found a bug or have a feature request? Start the
                      conversation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="secondary">Bugs</Badge>
                    <Badge variant="outline">Enhancements</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="#">Create issue</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-neutral-100">
                      Submit a Pull Request
                    </CardTitle>
                    <CardDescription>
                      Fork, branch, implement, and open a PR following the style
                      guide.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="secondary">PR</Badge>
                    <Badge variant="outline">Guide</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="#">Read guide</Link>
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
