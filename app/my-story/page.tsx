import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import StoryHeroSection from "@/components/sections/story/StoryHeroSection";
import StoryKeyChaptersSection from "@/components/sections/story/StoryKeyChaptersSection";
import StoryRecognitionSection from "@/components/sections/story/StoryRecognitionSection";
import StoryCtaSection from "@/components/sections/story/StoryCtaSection";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader
        rightSlot={
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-body hover:text-gold"
          >
            <Link href="/" className="gap-2" aria-label="Back to home page">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        }
      />

      <main className="flex-1">
        <StoryHeroSection />
        <StoryKeyChaptersSection />
        <StoryRecognitionSection />
        <StoryCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
