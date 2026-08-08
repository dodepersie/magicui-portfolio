import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, HomeIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

const BLUR_FADE_DELAY = 0.04;

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-md mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-8xl font-extrabold tracking-tighter bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-transparent sm:text-9xl">
            404
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Page Not Found
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Oops! The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex items-center justify-center gap-3 pt-4">
            <Button
              asChild
              className="rounded-full px-6 gap-2 text-xs font-medium cursor-pointer shadow-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <Link href="/">
                <HomeIcon className="size-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
