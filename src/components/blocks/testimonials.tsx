import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "Endelig har jeg full kontroll på vedlikeholdet. Nautix varsler meg i god tid, og jeg slipper å holde alt i hodet.",
    author: "Morten Larsen",
    role: "Eier",
    company: "Beneteau Oceanis 38",
  },
  {
    quote: "Perfekt for oss som har båten langt unna. Jeg kan se all historikk og dokumenter fra telefonen, uansett hvor jeg er.",
    author: "Kristine Berg",
    role: "Eier",
    company: "Quicksilver 605",
  },
  {
    quote: "AI-assistenten gir meg trygge svar på tekniske spørsmål. Det er som å ha en ekspert i lomma.",
    author: "Erik Johansen",
    role: "Eier",
    company: "Yamarin 63",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Båteiere stoler på Nautix
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Nautix gjør det enkelt å holde båten i toppform, slik at du kan fokusere på opplevelsene på sjøen.
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="flex flex-1 flex-col justify-between gap-6">
                          <blockquote className="font-display text-lg leading-snug font-medium md:text-xl">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-primary font-semibold">
                              {testimonial.author}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.role} • {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
