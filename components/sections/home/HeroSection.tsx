"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Download,
  Facebook,
  Linkedin,
} from "lucide-react";

import { useTypewriter } from "@/hooks/useTypewriter";
import { useState } from "react";

export default function HeroSection() {
  const displayText = useTypewriter([
    "Surgeon",
    "Healthcare Innovator",
    "Author",
    "Entrepreneur",
    "Public Speaker",
  ]);
  const [showEmail, setShowEmail] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  return (
    <section
      className="relative px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-gold">
            <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Preparing $100M Series A at Diagnoz AI
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gold mb-6 text-balance leading-tight"
          >
            Pioneer in AI-Powered Healthcare
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-body mb-8 h-12 sm:h-14 flex items-center">
            <span className="inline-block">{displayText}</span>
            <span className="inline-block w-0.5 h-8 sm:h-10 bg-gold ml-1 animate-pulse" />
          </div>

          <p className="text-base sm:text-lg text-body/80 mb-8 max-w-2xl leading-relaxed">
            Serial entrepreneur with proven track record: €75M valuation
            (ReLyfe), €30M valuation (InnovHealth). Author of three
            internationally published books on AI in medicine. EY Best
            Entrepreneur 2019 & Choiseul Top 100 Laureate. Currently building
            the future of predictive healthcare as Co Founder & CEO of Diagnoz
            AI.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
            <div className="flex flex-col">
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
            <Link href="/DiagnozSummary.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-gold/30 hover:border-gold text-body hover:text-gold w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download the Diagnoz strategy
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 items-center pt-4 border-t border-border/50">
            <span className="text-sm text-muted-foreground">Connect:</span>
            <Link
              href="https://www.linkedin.com/in/adnanelbakri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/elbakriadnan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://adnanelbakri.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-gold transition-colors"
              aria-label="Medium Blog"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
