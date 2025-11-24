import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { AwardsGrid } from "@/components/sections/shared/AwardsGrid";
import { storyAwards } from "@/lib/awards";
import { Card } from "@/components/ui/card";

export default function StoryRecognitionSection() {
  return (
    <section
      className="px-4 sm:px-6 py-16"
      aria-labelledby="story-recognition-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          id="story-recognition-heading"
          title="Recognition & Impact"
        />

        <AwardsGrid awards={storyAwards} />

        <article className="mt-8">
          <Card className="p-6 sm:p-8 bg-linear-to-br from-gold/10 to-transparent border-gold/30">
            <p className="text-body leading-relaxed italic">
              &quot;His vision is clear: to make predictive and preventive
              healthcare accessible to all, while preserving medical ethics and
              human dignity.&quot;
            </p>
          </Card>
        </article>
      </div>
    </section>
  );
}
