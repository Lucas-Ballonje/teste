import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const lawyers = [
  {
    name: "Eleanor Vance",
    title: "Senior Partner",
    expertise:
      "Com mais de 20 anos de experiência em direito empresarial e fusões, Eleanor é reconhecida por sua habilidade estratégica e atenção minuciosa aos detalhes, conduzindo empresas a decisões seguras e lucrativas.",
    image: "https://placehold.co/300x300.png",
    dataAiHint: "lawyer portrait professional",
  },
  {
    name: "Marcus Thorne",
    title: "Criminal Defense Attorney",
    expertise:
      "Especialista em defesa criminal, Marcus construiu uma sólida reputação por sua atuação firme e comprometida, obtendo vitórias expressivas em casos de alta complexidade e grande repercussão.",
    image: "https://placehold.co/300x300.png",
    dataAiHint: "attorney portrait confident",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Conheça Nossos Advogados Especialistas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais que unem experiência,
            dedicação e profundo conhecimento jurídico para oferecer soluções
            sob medida. Aqui, cada caso é tratado com atenção exclusiva e
            estratégia precisa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-10">
          {lawyers.map((lawyer) => (
            <Card
              key={lawyer.name}
              className="overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 max-w-[400px]"
            >
              <CardHeader className="p-0">
                <Image
                  src={lawyer.image}
                  alt={`Retrato de ${lawyer.name}`}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                  data-ai-hint={lawyer.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-accent">
                  {lawyer.name}
                </CardTitle>
                <p className="text-sm font-semibold text-primary/80 mt-1 mb-3">
                  {lawyer.title}
                </p>
                <CardDescription className="text-base">
                  {lawyer.expertise}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
