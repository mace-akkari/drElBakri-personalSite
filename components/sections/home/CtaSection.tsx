"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CtaSection() {
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-6 text-balance">
          Let's Build the Future of Healthcare Together
        </h2>
        <p className="text-base sm:text-lg text-body/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          Interested in learning more about my work, exploring partnership
          opportunities, or discussing the future of predictive medicine? Let's
          connect.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              className="gap-2 bg-gold text-black hover:bg-gold/90 w-full sm:w-auto"
              onClick={() => {
                setShowEmail((prev) => !prev);
                navigator.clipboard.writeText("adnan.elbakri@gmail.com");
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
              }}
            >
              {showEmail
                ? "adnan.elbakri@gmail.com"
                : "Contact for Opportunities"}
              <ArrowRight className="h-4 w-4" />
            </Button>

            {emailCopied && (
              <p className="text-xs text-gold/80 mt-1" aria-live="polite">
                Email copied to clipboard
              </p>
            )}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent border-gold/30 hover:border-gold text-body hover:text-gold w-full sm:w-auto"
            asChild
          >
            <Link href="/my-story">
              Read My Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
