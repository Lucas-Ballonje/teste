import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const lawyers = [
  {
    name: 'Eleanor Vance',
    title: 'Senior Partner',
    expertise: 'Specializes in corporate law and mergers, with over 20 years of experience guiding businesses through complex legal landscapes.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'lawyer portrait professional',
  },
  {
    name: 'Marcus Thorne',
    title: 'Criminal Defense Attorney',
    expertise: 'A formidable presence in the courtroom, Marcus has a proven track record of successfully defending clients in high-stakes criminal cases.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'attorney portrait confident',
  },
  {
    name: 'Isabella Rossi',
    title: 'Family Law Specialist',
    expertise: 'Compassionate yet firm, Isabella is dedicated to resolving family disputes with a focus on achieving the best outcomes for children and families.',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'lawyer portrait friendly',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Meet Our Expert Attorneys</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team is composed of passionate, dedicated professionals who bring a wealth of knowledge and experience to every case.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lawyers.map((lawyer) => (
            <Card key={lawyer.name} className="overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={lawyer.image}
                  alt={`Portrait of ${lawyer.name}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={lawyer.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl text-accent">{lawyer.name}</CardTitle>
                <p className="text-sm font-semibold text-primary/80 mt-1 mb-3">{lawyer.title}</p>
                <CardDescription className="text-base">{lawyer.expertise}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
