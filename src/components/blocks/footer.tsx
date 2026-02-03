import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Funksjoner", href: "/#features" },
    { name: "Priser", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const legal = [
    { name: "Personvern", href: "/privacy" },
    { name: "Vilkår", href: "/terms" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Kom i gang med Nautix i dag
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Full kontroll på båten din. Få påminnelser, oversikt og trygghet – helt gratis å prøve.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="https://app.nautix.no/signup">
              Kom i gang gratis
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20 pb-10">
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Nautix, en del av Nag Software.<br/>Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}
