import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

export default function StoryHeroSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-sm text-gold">
          <BookOpen className="h-4 w-4" />
          The Journey
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-6 text-balance">
          Beyond the Frontiers of Medicine
        </h1>
        <p className="text-lg sm:text-xl text-body/80 mb-8 leading-relaxed">
          The boy from Tripoli who dared to reach for the stars - from Tripoli
          to pioneering AI-powered healthcare across Europe and beyond.
        </p>

        <Card className="p-6 sm:p-8 bg-linear-to-br from-gold/10 to-transparent border-gold/30 mb-12">
          <p className="text-body leading-relaxed mb-6">
            Dr. Adnan El Bakri&apos;s story is one of relentless innovation,
            bridging the worlds of medicine, technology, and entrepreneurship.
            From his beginnings in Tripoli to becoming one of Europe&apos;s
            pioneering voices in e-Health and AI-powered medicine, his journey
            exemplifies the power of vision, determination, and the pursuit of
            excellence.
          </p>

          <Button
            size="lg"
            className="gap-2 bg-gold text-black hover:bg-gold/90 w-full sm:w-auto"
            asChild
          >
            <a
              href="https://adnanelbakri.medium.com/dr-adnan-el-bakri-the-journey-f36aec53b058"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Story on Medium
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
}
