import { Card } from "@/components/ui/card";

export default function BooksSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Published Works
          </h2>
          <p className="text-body text-base sm:text-lg">
            Available worldwide on Amazon, Barnes & Noble, BoD, Fnac
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all hover:scale-105">
            <div className="text-sm text-gold mb-3 font-semibold">
              February 2021
            </div>
            <h3 className="text-lg font-bold text-body mb-3 leading-tight">
              Prédire l&apos;évolution du cancer avec l&apos;intelligence
              artificielle
            </h3>
            <p className="text-body/90 text-sm leading-relaxed">
              Pioneering work on machine learning algorithms for cancer
              prediction. Groundbreaking research on predictive oncology.
            </p>
          </Card>

          <Card className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all hover:scale-105">
            <div className="text-sm text-gold mb-3 font-semibold">
              July 2022
            </div>
            <h3 className="text-lg font-bold text-body mb-3 leading-tight">
              Medical Collaboration with Artificial Intelligence: A Real-Life
              Paradigm Shift
            </h3>
            <p className="text-body/90 text-sm leading-relaxed">
              Explores the transformative impact of AI integration in healthcare
              practice and the future of medical collaboration.
            </p>
          </Card>

          <Card className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all hover:scale-105">
            <div className="text-sm text-gold mb-3 font-semibold">
              March 2024
            </div>
            <h3 className="text-lg font-bold text-body mb-3 leading-tight">
              Au-delà des Frontières de la Médecine: Le gamin de Tripoli qui
              voulait tutoyer les étoiles
            </h3>
            <p className="text-body/90 text-sm leading-relaxed">
              Biographical literary masterpiece co-created with Yoann
              Laurent-Rouault. An incredible journey chronicling an
              extraordinary life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
