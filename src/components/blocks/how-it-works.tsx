import { Anchor, Bell, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Opprett din båt",
    description: "Registrer båten din med grunnleggende informasjon. Det tar mindre enn 2 minutter.",
    icon: Anchor,
  },
  {
    number: "02",
    title: "Legg til utstyr og vedlikehold",
    description: "Registrer motor, elektronikk og annet utstyr. Sett opp vedlikeholdsintervaller.",
    icon: Plus,
  },
  {
    number: "03",
    title: "Få påminnelser og oversikt",
    description: "Motta varsler når service nærmer seg. Se alt på ett sted, når du trenger det.",
    icon: Bell,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-20">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl mb-4">
            Slik fungerer det
          </h2>
          <p className="text-muted-foreground leading-snug">
            Kom i gang på minutter. Nautix gjør det enkelt å få kontroll.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <Card className="h-full border-2">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {step.number}
                      </Badge>
                    </div>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="size-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
