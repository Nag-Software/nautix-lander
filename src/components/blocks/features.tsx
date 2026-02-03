import { Anchor, Bell, BookOpen, BrainCircuit, ClipboardList, Wrench } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Samtale med en båt-ekspert",
    description:
      "Spør om hva som helst. Nautix foreslår årsaker, tiltak og hva du bør sjekke først.",
    icon: BrainCircuit,
  },
  {
    title: "Søk i manualer og dokumenter",
    description:
      "Nautix finner relevante utdrag i manualer og dokumenter du har lastet opp.",
    icon: BookOpen,
  },
  {
    title: "Kjenner utstyret ditt",
    description:
      "Når du registrerer motor og utstyr, får du mer presise svar og bedre oversikt.",
    icon: Anchor,
  },
  {
    title: "Vedlikeholdspåminnelser",
    description: "Automatiske varsler når service er forfalt. Aldri glem viktig vedlikehold igjen.",
    icon: Bell,
  },
  {
    title: "Motor og utstyrslogg",
    description: "Hold oversikt over driftstimer, service og historikk på motor og annet utstyr.",
    icon: Wrench,
  },
  {
    title: "Digital båtlogg",
    description: "Registrer turer, observasjoner og hendelser enkelt fra mobilen.",
    icon: ClipboardList,
  },
];

export const Features = () => {
  return (
    <section id="features" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            KONTROLL OG TRYGGHET
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-4 lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
            Båtens ekspert – koblet til dine dokumenter
          </h2>
          <p className="text-muted-foreground leading-snug text-center max-w-2xl mx-auto">
            Still spørsmål, finn manualer, og få oversikt. Nautix samler alt om båten din og gjør det tilgjengelig i en enkel samtale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 lg:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
