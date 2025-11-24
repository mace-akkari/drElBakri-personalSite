import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function StoryCtaSection() {
  return (
    <section className="px-4 sm:px-6 py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
          Want to Learn More?
        </h2>
        <p className="text-body/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          Dive deeper into the full story and discover how Dr. El Bakri
          continues to shape the future of healthcare.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              Read on Medium
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent border-gold/30 hover:border-gold text-body hover:text-gold w-full sm:w-auto"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
