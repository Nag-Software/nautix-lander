import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const included = [
  "Vedlikeholdspåminnelser",
  "Motor- og utstyrslogg",
  "Dokumentarkiv for manualer og kvitteringer",
  "AI-assistent for vedlikeholdsspørsmål",
  "Tilgjengelig på mobil, nettbrett og PC",
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Helt GRATIS å bruke
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Nautix er gratis nå mens vi bygger brukerbase og finpusser produktet.
          </p>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <Card className="border-2 mx-auto w-full max-w-lg">
            <CardContent className="flex flex-col gap-7 px-6 py-7 md:px-10 md:py-10">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <Badge variant="secondary">Foreløpig gratis</Badge>
                </div>
                <h3 className="text-foreground text-2xl font-semibold">
                  Alt inkludert
                </h3>
                <div className="text-muted-foreground text-lg font-medium">
                  0 kr <span className="text-muted-foreground">• ingen binding • ingen kredittkort</span>
                </div>
                <p className="text-muted-foreground text-sm leading-snug">
                  Vi åpner gratis tilgang for å få feedback fra ekte båteiere.
                </p>
              </div>

              <div className="flex flex-col gap-2 mx-auto max-w-md">
                {included.map((feature) => (
                  <div
                    key={feature}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-3">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://app.nautix.no/signup">Kom i gang gratis</a>
                </Button>
                <p className="text-muted-foreground text-sm text-center">
                  Spørsmål?{" "}
                  <a className="underline underline-offset-4" href="/contact">
                    Kontakt oss
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
