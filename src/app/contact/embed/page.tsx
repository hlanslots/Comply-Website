import type { Metadata } from "next";

import { ContactForm } from "@/components/marketing/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "COMPLY Contact Form Embed",
  robots: {
    index: false,
    follow: false,
  },
};

function normalizeSource(source: unknown) {
  return source === "ansec" ? "ansec" : "comply";
}

export default async function ContactEmbedPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string | string[] }>;
}) {
  const params = await searchParams;
  const source = normalizeSource(
    Array.isArray(params.source) ? params.source[0] : params.source,
  );

  return (
    <div className="min-h-svh bg-transparent p-4 sm:p-6">
      <Card className="bg-card/90 shadow-none">
        <CardContent className="p-6">
          <ContactForm source={source} />
        </CardContent>
      </Card>
    </div>
  );
}
