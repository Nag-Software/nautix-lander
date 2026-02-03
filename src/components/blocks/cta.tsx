import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl mb-4">
            Still ditt første spørsmål
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-snug mb-8 text-lg">
            Nautix er båtens ekspert i lomma – med tilgang til båten din, motoren din og dokumentene dine. Gratis å prøve, ingen kredittkort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="https://app.nautix.no/signup">
                Det er helt gratis!
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">
                Kontakt oss
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
