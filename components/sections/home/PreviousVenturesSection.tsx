import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function PreviousVenturesSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Proven Track Record
          </h2>
          <p className="text-body/70 text-base sm:text-lg">
            Multiple successful exits and scaled healthcare innovations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <Building2 className="h-6 w-6 text-gold shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gold mb-2">
                  ReLyfe
                </h3>
                <p className="text-sm text-body/60">Founded 2021</p>
              </div>
            </div>
            <p className="text-body/80 mb-6 leading-relaxed text-sm sm:text-base">
              Launched with a €40M Series A at €75M valuation. Successfully
              signed deal with U.S. venture capital fund and acquired New
              York-based startup BeCareLink LLC. Demonstrating international
              expansion capability and strategic M&A execution.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Series A Funding:</span>
                <span className="text-gold font-semibold">€40M</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Valuation:</span>
                <span className="text-gold font-semibold">€75M</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Exit Status:</span>
                <span className="text-gold font-semibold">Successful</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Acquisition:</span>
                <span className="text-gold font-semibold">BeCareLink LLC</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <Building2 className="h-6 w-6 text-gold shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gold mb-2">
                  InnovHealth (PassCare)
                </h3>
                <p className="text-sm text-body/60">Founded 2016</p>
              </div>
            </div>
            <p className="text-body/80 mb-6 leading-relaxed text-sm sm:text-base">
              Developed first digital, private, interactive medical identity
              platform and International Health Card. Innovation recognized by
              French National Academy of Surgery and influenced France's
              national digital health strategy adopted by the Ministry of
              Health.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Funding Raised:</span>
                <span className="text-gold font-semibold">€5M</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Valuation:</span>
                <span className="text-gold font-semibold">€30M</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Team Size:</span>
                <span className="text-gold font-semibold">40 employees</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Annual Revenue:</span>
                <span className="text-gold font-semibold">€400K</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Patients Served:</span>
                <span className="text-gold font-semibold">20,000</span>
              </div>
              <div className="flex justify-between p-2 bg-background/50 rounded">
                <span className="text-body/70">Corporate Clients:</span>
                <span className="text-gold font-semibold">15</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
