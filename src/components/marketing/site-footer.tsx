import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { footerColumns } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/45">
      <div className="site-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3" aria-label="COMPLY home">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-semibold tracking-[0.2em]">COMPLY</span>
            </Link>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Evidence-driven compliance, governance, risk management, and audit readiness for
              organizations that need defensible outcomes.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-sm font-semibold">{column.title}</h2>
                <ul className="grid gap-3 text-sm text-muted-foreground">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/contact" className="transition hover:text-foreground">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Achieve Compliance. Demonstrate Compliance. Leverage Your Edge.</p>
          <p>© {new Date().getFullYear()} COMPLY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
