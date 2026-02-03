import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export const Teaser = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            En ekspert du kan spørre når som helst
          </h2>
          <p className="text-muted-foreground mt-4 leading-snug">
            Spør om symptomer, service og feilsøking. Nautix bruker informasjonen om båten din og dokumentene dine for å gi konkrete forslag.
          </p>
        </div>

        <Card className="mt-10 border-2 overflow-hidden">
          <CardContent className="p-0">
            <figure>
              <div className="bg-muted/40">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/hero.webp"
                >
                  <source src="/teaser.mp4" type="video/mp4" />
                  <Image
                    src="/hero.webp"
                    alt="Skjermbilde av Nautix med oversikt over båt og vedlikehold"
                    className="h-auto w-full"
                    width={1600}
                    height={900}
                    sizes="100vw"
                  />
                </video>
              </div>
              <figcaption className="sr-only">
                Nautix gir deg full oversikt på tvers av vedlikehold, dokumenter
                og utstyr.
              </figcaption>
            </figure>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
