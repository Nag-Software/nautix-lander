import { Background } from "@/components/background";
import { CTA } from "@/components/blocks/cta";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { HowItWorks } from "@/components/blocks/how-it-works";
import { Teaser } from "@/components/blocks/teaser";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Teaser />
        <Features />
        <HowItWorks />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <CTA />
        <FAQ />
      </Background>
    </>
  );
}
