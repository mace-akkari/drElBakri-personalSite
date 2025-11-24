import { Card } from "@/components/ui/card";
import { Award, BookOpen, Lightbulb, Users } from "lucide-react";

export default function StoryKeyChaptersSection() {
  return (
    <section className="px-4 sm:px-6 py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gold mb-8">Key Chapters</h2>

        <div className="space-y-6">
          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Medical Excellence
                </h3>
                <p className="text-body/80 leading-relaxed">
                  Trained at France&apos;s most prestigious hospitals including
                  La Timone (Marseille), Reims University Hospital, and La
                  Pitié-Salpêtrière (Paris). Specialized in Urology and Oncology
                  with over 500 night shifts in emergency units, developing a
                  deep understanding of patient care and medical urgency.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Academic Achievement
                </h3>
                <p className="text-body/80 leading-relaxed">
                  Earned Doctorate in Medicine from University of Reims with the
                  highest distinction (Very Honourable with Congratulations of
                  the Jury). Holds MPH in Public Health from Aix-Marseille
                  University, M2 in Biology and Health specialising in Deep
                  Learning and AI from Paris-Saclay, and Executive MBA from HEC
                  Paris.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Lightbulb className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Research Pioneer
                </h3>
                <p className="text-body/80 leading-relaxed">
                  Led groundbreaking multicentric study at CNRS/INSERM
                  developing machine-learning algorithms for kidney cancer
                  prediction with 97% accuracy, analysing a five-year cohort of
                  100 patients and over 4 million data points. This marked one
                  of Europe&apos;s early milestones in AI-assisted oncology.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Entrepreneurial Vision
                </h3>
                <p className="text-body/80 leading-relaxed">
                  Founded InnovHealth in 2016 (€5M raised at €30M valuation),
                  launched ReLyfe in 2021 (€40M Series A at €75M valuation), and
                  currently leads Diagnoz AI toward a $100M Series A. His
                  innovations directly influenced the architecture of
                  France&apos;s national digital health platform, adopted by the
                  Ministry of Health.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
