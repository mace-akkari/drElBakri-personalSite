import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { AwardsGrid } from "@/components/sections/shared/AwardsGrid";
import { homeAwards } from "@/lib/awards";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function AwardsSection() {
  return (
    <section
      className="px-4 sm:px-6 py-16 sm:py-20"
      aria-labelledby="awards-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="awards-heading"
          title="Awards & Recognition"
          subtitle="Recognised by leading institutions worldwide"
        />

        <AwardsGrid awards={homeAwards} />

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <article>
            <Card className="p-6 bg-linear-to-br from-gold/10 to-transparent border-gold/30">
              <div className="flex items-start gap-3">
                <Users
                  className="h-6 w-6 text-gold shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-gold mb-1">
                    Founder &amp; Spokesperson
                  </h3>
                  <p className="text-sm text-body/70">
                    National Council of e-Health
                  </p>
                </div>
              </div>
            </Card>
          </article>

          <article>
            <Card className="p-6 bg-linear-to-br from-gold/10 to-transparent border-gold/30">
              <div className="flex items-start gap-3">
                <Users
                  className="h-6 w-6 text-gold shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-gold mb-1">
                    Vice-President
                  </h3>
                  <p className="text-sm text-body/70">
                    National Council of Young Surgeons
                  </p>
                </div>
              </div>
            </Card>
          </article>
        </div>
      </div>
    </section>
  );
}
