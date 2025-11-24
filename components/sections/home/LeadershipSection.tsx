import { Card } from "@/components/ui/card";

export default function LeadershipSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Leadership & Global Impact
          </h2>
          <p className="text-body/90 text-base sm:text-lg">
            Shaping the future of healthcare through innovation and thought
            leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-8 bg-card border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">
              e-Health Pioneer
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Widely regarded as one of the pioneers of e-Health in Europe
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Innovation influenced France&apos;s national digital health
                  platform
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>Board member of e-Health World Monaco</span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Created first digital, interactive, intelligent medical
                  profile
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">
              International Speaker & Educator
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>Independent researcher and university lecturer</span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Delivered talks in France, Tunisia, Morocco, and Lebanon
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Topics: AI ethics, innovation, and the future of medicine
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  Dozens of scientific publications with significant citation
                  impact
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
