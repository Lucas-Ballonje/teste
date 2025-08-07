import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Decades of combined legal experience.",
  "A client-first approach to every case.",
  "Proven track record of successful outcomes.",
  "Personalized strategies tailored to your unique needs.",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">Why a Trusted Legal Partner is Invaluable</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Navigating the complexities of the legal system alone can be overwhelming and risky. An experienced lawyer not only provides expert guidance but also acts as your advocate, ensuring your rights are protected and your voice is heard.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Professional law office environment"
                width={600}
                height={450}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="law books office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
