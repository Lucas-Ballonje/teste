import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Landmark, Users, Shield, Briefcase, BrainCircuit } from "lucide-react";

const specialties = [
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: "Direito Empresarial",
    content:
      "Fortalecemos o crescimento de empresas com assessoria jurídica completa — desde a constituição e estruturação até fusões, aquisições e conformidade regulatória. Sua empresa segura em bases jurídicas sólidas.",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Direito Famíliar",
    content:
      "Questões familiares exigem atenção e sensibilidade. Atuamos em divórcios, guarda de filhos e adoções, buscando soluções que preservem relações e protejam o bem-estar da sua família.",
  },
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: "Defesa Criminal",
    content:
      "Defendemos seus direitos com firmeza e estratégia. Do inquérito à audiência final, oferecemos defesa penal experiente para enfrentar qualquer acusação com segurança.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-accent" />,
    title: "Direito Imobiliário",
    content:
      "Protegemos seus interesses imobiliários em todas as etapas — de negociações e contratos a litígios e regularizações. Tranquilidade para você investir ou vender com segurança.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    title: "Propriedade Intelectual",
    content:
      "Suas ideias têm valor. Protegemos marcas, patentes e direitos autorais, garantindo que suas criações sejam reconhecidas e resguardadas contra usos indevidos.",
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Áreas de Atuação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Expertise jurídica abrangente para atender às demandas mais
            complexas, sempre com compromisso, estratégia e resultados.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {specialties.map((specialty, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-2 border-border"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    {specialty.icon}
                    <span className="font-headline text-xl md:text-2xl font-semibold">
                      {specialty.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 text-base text-muted-foreground">
                  {specialty.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
