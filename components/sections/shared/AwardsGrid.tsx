import { Card } from "@/components/ui/card";

interface Award {
  icon: string;
  title: string;
  subtitle: string;
}

export function AwardsGrid({ awards }: { awards: Award[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {awards.map((award, index) => (
        <article key={index}>
          <Card className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-colors">
            <div className="text-3xl mb-3" aria-hidden="true">
              {award.icon}
            </div>
            <h3 className="font-semibold text-body mb-1">{award.title}</h3>
            <p className="text-sm text-body/70">{award.subtitle}</p>
          </Card>
        </article>
      ))}
    </div>
  );
}
