import type { ReactNode } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const heroHeadlineClass =
  "text-balance max-w-6xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="site-shell">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <Badge className="mb-4 rounded-md">{eyebrow}</Badge> : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-7 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border/70 py-20 sm:py-28", className)}>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,oklch(0.18_0.03_245),transparent_45%),radial-gradient(circle_at_80%_15%,oklch(0.67_0.15_178_/_0.22),transparent_30%)] dark:bg-[linear-gradient(125deg,oklch(0.1_0.025_245),transparent_45%),radial-gradient(circle_at_80%_15%,oklch(0.67_0.15_178_/_0.18),transparent_30%)]" />
      <div className="site-shell grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-center">
        <div>
          <Badge className="mb-5 rounded-md">{eyebrow}</Badge>
          <h1 className={heroHeadlineClass}>
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-7 text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>
        <div className="hidden justify-end lg:flex">
          <Image
            src="/logo-transparent.png"
            alt="COMPLY logo"
            width={1024}
            height={1024}
            className="h-56 w-56 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
