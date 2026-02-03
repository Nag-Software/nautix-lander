import {
  Anchor,
  Bell,
  FileText,
  MessageSquare,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI båt-ekspert",
    description:
      "Still spørsmål om alt fra motor til el. Nautix foreslår løsninger og neste steg.",
    icon: Bell,
  },
  {
    title: "Kjenner din båt",
    description:
      "Basert på båt, motor og utstyr du registrerer – får du mer relevante svar.",
    icon: Anchor,
  },
  {
    title: "Manualer og dokumenter",
    description:
      "Last opp manualer og kvitteringer. Nautix finner fram relevante utdrag for deg.",
    icon: FileText,
  },
  {
    title: "Finn erfaringer raskt",
    description:
      "Hjelper deg å finne relevante råd og mulige løsninger basert på tilgjengelige kilder.",
    icon: MessageSquare,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            La Nautix bli din Båt-ekspert
          </h1>

          <p className="text-muted-foreground text-md mt-5 md:text-xl">
            Nautix er en samtalepartner og ekspert som kjenner båten din. Den henter fram manualer og dokumenter, og hjelper deg å finne mulige løsninger når noe ikke fungerer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button size="lg" asChild>
              <a href="https://app.nautix.no/signup">
                Det er helt gratis!
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="https://app.nautix.no/login">
                Logg inn
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground mt-4 text-sm leading-snug">
            Ingen kredittkort kreves, og ingen skjulte kostnader.
          </p>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
