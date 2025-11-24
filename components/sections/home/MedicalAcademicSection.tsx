import { Card } from "@/components/ui/card";
import { Award, FileText } from "lucide-react";

export default function MedicalAcademicSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Medical Excellence & Research
          </h2>
          <p className="text-body/70 text-base sm:text-lg">
            World-class medical training and pioneering AI research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 sm:p-8 bg-card border-gold/20">
            <div className="flex items-start gap-3 mb-4">
              <Award className="h-6 w-6 text-gold shrink-0" />
              <h3 className="text-xl font-bold text-gold">Medical Training</h3>
            </div>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Surgery Resident & Tutor</strong> - La Timone
                  (Marseille), Reims University Hospital, La Pitié-Salpêtrière
                  (Paris)
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Specialization:</strong> Urology & Oncology
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Experience:</strong> 500+ night shifts in emergency
                  units
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Doctorate:</strong> Very Honourable with
                  Congratulations of the Jury (URCA, 2019)
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="h-6 w-6 text-gold shrink-0" />
              <h3 className="text-xl font-bold text-gold">
                Academic Credentials
              </h3>
            </div>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Executive MBA</strong> - HEC Paris (Entrepreneurship &
                  Innovation)
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>M2 Biology & Health</strong> - Paris-Saclay (Deep
                  Learning, Genetics, Neurosciences)
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>MPH & Legal Medicine</strong> - Aix-Marseille
                  University
                </span>
              </li>
              <li className="flex items-start gap-2 text-body/80">
                <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>DES General Surgery</strong> + Complementary Urology -
                  Reims University
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-6 sm:p-8 bg-linear-to-br from-gold/5 to-transparent border-gold/30">
          <h3 className="text-xl font-bold text-gold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Groundbreaking Research
          </h3>
          <p className="text-body/80 leading-relaxed mb-4 text-sm sm:text-base">
            Conducted pioneering research at{" "}
            <strong className="text-gold">CNRS / INSERM</strong> leading a
            multicentric study that developed a machine-learning algorithm
            predicting kidney cancer with{" "}
            <strong className="text-gold">97% accuracy</strong>.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-gold mb-1">5 years</div>
              <div className="text-xs text-body/70">Study Duration</div>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-gold mb-1">4M+</div>
              <div className="text-xs text-body/70">Data Points</div>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-gold mb-1">97%</div>
              <div className="text-xs text-body/70">Prediction Accuracy</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
