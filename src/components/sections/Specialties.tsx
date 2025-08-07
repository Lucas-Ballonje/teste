import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Landmark, Users, Shield, Briefcase, BrainCircuit } from 'lucide-react';

const specialties = [
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: "Corporate Law",
    content: "We provide comprehensive legal services for businesses, from formation and governance to mergers, acquisitions, and compliance, ensuring your company thrives on a solid legal foundation."
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Family Law",
    content: "Navigating family matters requires sensitivity and strength. We handle cases involving divorce, child custody, and adoption with the utmost care, prioritizing your family's well-being."
  },
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: "Criminal Defense",
    content: "Facing criminal charges can be daunting. Our experienced defense attorneys are committed to protecting your rights and providing a robust defense at every stage of the legal process."
  },
  {
    icon: <Landmark className="h-6 w-6 text-accent" />,
    title: "Real Estate Law",
    content: "From residential closings to complex commercial transactions and zoning disputes, our team offers expert guidance to protect your property interests and ensure smooth transactions."
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    title: "Intellectual Property",
    content: "Your ideas have value. We help innovators, artists, and businesses protect their intellectual property through trademarks, copyrights, and patents, safeguarding your most valuable assets."
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Areas of Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer specialized counsel across a wide range of legal fields to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {specialties.map((specialty, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-border">
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    {specialty.icon}
                    <span className="font-headline text-xl md:text-2xl font-semibold">{specialty.title}</span>
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
