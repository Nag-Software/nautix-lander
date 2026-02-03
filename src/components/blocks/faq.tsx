import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Kom i gang",
    questions: [
      {
        question: "Hvor raskt kan jeg komme i gang med Nautix?",
        answer:
          "Du kan opprette en konto og registrere båten din på under 2 minutter. Legg deretter til utstyr og vedlikeholdsintervaller når du har tid – det er fullt fleksibelt.",
      },
      {
        question: "Trenger jeg å registrere alt med en gang?",
        answer:
          "Nei, du kan starte enkelt og legge til mer informasjon underveis. Begynn med grunnleggende båtinfo og utvid etter hvert som du blir mer komfortabel med systemet.",
      },
      {
        question: "Fungerer Nautix både på mobil og nettbrett?",
        answer:
          "Ja, Nautix er fullt responsiv og fungerer smidig på mobil, nettbrett og PC. Du har alltid tilgang til båtinformasjonen din, uansett hvor du er.",
      },
    ],
  },
  {
    title: "Funksjonalitet",
    questions: [
      {
        question: "Hvordan fungerer vedlikeholdspåminnelsene?",
        answer:
          "Du setter opp vedlikeholdsintervaller basert på tid eller driftstimer. Nautix varsler deg automatisk når service nærmer seg, slik at du aldri glemmer viktig vedlikehold.",
      },
      {
        question: "Kan jeg lagre dokumenter og kvitteringer?",
        answer:
          "Ja, du kan laste opp og organisere alle dokumenter relatert til båten – manualer, kvitteringer, sertifikater og forsikringspapirer. Alt på ett sikkert sted.",
      },
      {
        question: "Hva kan AI-assistenten hjelpe meg med?",
        answer:
          "Du kan spørre om symptomer, feilsøking, vedlikehold og serviceintervaller. Nautix kan også finne fram relevante utdrag fra manualer og dokumenter du har lastet opp, og foreslå neste steg basert på tilgjengelige kilder.",
      },
      {
        question: "Hvordan kan Nautix gi mer presise svar for min båt?",
        answer:
          "Jo mer du legger inn (båtmodell, motor, utstyr) og jo flere manualer/dokumenter du laster opp, desto mer presise og relevante blir svarene. Du får forslag som tar hensyn til akkurat din båt.",
      },
    ],
  },
  {
    title: "Sikkerhet og støtte",
    questions: [
      {
        question: "Er dataene mine sikre?",
        answer:
          "Ja, alle data er kryptert og lagres sikkert. Vi tar personvern på alvor og følger alle relevante datasikkerhetsstandarder.",
      },
      {
        question: "Hva koster Nautix?",
        answer:
          "Nautix er foreløpig helt gratis. Du kan registrere båt, sette opp vedlikehold, lagre dokumenter og bruke AI-assistenten uten kostnad.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Ofte stilte spørsmål
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Ofte stilte spørsmål
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Finner du ikke svaret du leter etter?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Ta kontakt
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
