import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background text-foreground py-24 sm:py-32 lg:py-40">
      <div
        className="absolute inset-0 bg-dot-pattern opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)/.1) 1px, transparent 1px)",
          backgroundSize: "1rem 1rem",
        }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Soluções <span className="text-accent">Jurídicas</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Especialistas em Direito Cível e Trabalhista, oferecemos atendimento
          personalizado para pessoas físicas e jurídicas, garantindo segurança e
          confiança em cada etapa do seu processo.{" "}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#schedule">
              Agende uma Consulta Gratuita
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="link" size="lg" className="text-foreground">
            <Link href="#specialties">
              Conheça Nossos Serviços{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
