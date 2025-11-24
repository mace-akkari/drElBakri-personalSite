import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CurrentVentureSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Current Venture
          </h2>
          <p className="text-body/70 text-base sm:text-lg">
            Building the future of predictive medicine
          </p>
        </div>

        <Card className="p-6 sm:p-8 lg:p-12 bg-card border-gold/20 hover:border-gold/40 transition-colors">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xl sm:text-2xl shrink-0">
              D
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gold mb-2">
                Diagnoz AI
              </h3>
              <p className="text-body/70 text-sm sm:text-base">
                European Biotech • Amsterdam, Netherlands
              </p>
            </div>
          </div>

          <p className="text-body leading-relaxed mb-6 text-sm sm:text-base">
            Building digital body twins using Generative AI (LLM/ML/DL/NLP/NLU),
            integrating genetic, biological, and physiological data into
            learning models capable of predicting and preventing disease.
            Leading a multidisciplinary team of physicians, engineers, and data
            scientists to make predictive and preventive healthcare accessible
            to all.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
              <span className="text-body/80 text-sm sm:text-base">
                Preparing $100M Series A
              </span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
              <span className="text-body/80 text-sm sm:text-base">
                International patent holder
              </span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
              <span className="text-body/80 text-sm sm:text-base">
                Seed round complete
              </span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
              <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
              <span className="text-body/80 text-sm sm:text-base">
                Multidisciplinary team
              </span>
            </div>
          </div>

          <p className="text-sm text-body/60 italic mb-6 p-4 bg-gold/5 rounded-lg border-l-2 border-gold">
            International Patent (WO2024002654/EP22181629): Automated System and
            Method for Managing an AI Health Platform — a cornerstone for
            predictive medicine and next-generation HealthTech.
          </p>

          <Button
            asChild
            className="gap-2 bg-gold text-black hover:bg-gold/90 w-full sm:w-auto"
          >
            <a
              href="https://www.diagnoz.ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about Diagnoz AI on the official website"
            >
              Learn More About Diagnoz AI
              <ArrowRight className="h-4 w-4 inline-block align-middle" />
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
}
