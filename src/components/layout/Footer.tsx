import Link from 'next/link';
import { Phone, Mail, MapPin, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-headline text-2xl font-bold text-accent">LexConnect</h2>
            <p className="mt-4 text-sm text-primary-foreground/80">Your trusted partner in justice. Providing expert legal counsel with integrity and dedication.</p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">Contact</h3>
            <div className="mt-4 flex flex-col space-y-3">
              <p className="flex items-center text-sm">
                <MapPin className="mr-3 h-4 w-4 text-accent" />
                123 Legal Ave, Justice City, 10101
              </p>
              <a href="mailto:contact@lexconnect.com" className="flex items-center text-sm hover:text-accent transition-colors">
                <Mail className="mr-3 h-4 w-4 text-accent" />
                contact@lexconnect.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-sm hover:text-accent transition-colors">
                <Phone className="mr-3 h-4 w-4 text-accent" />
                (123) 456-7890
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="#about" className="text-sm hover:text-accent transition-colors">About Us</Link>
              <Link href="#specialties" className="text-sm hover:text-accent transition-colors">Specialties</Link>
              <Link href="#why-us" className="text-sm hover:text-accent transition-colors">Why Choose Us</Link>
              <Link href="#schedule" className="text-sm hover:text-accent transition-colors">Schedule Consultation</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider">Practice Areas</h3>
            <div className="mt-4 flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <p>Corporate Law</p>
              <p>Family Law</p>
              <p>Criminal Defense</p>
              <p>Real Estate Law</p>
              <p>Intellectual Property</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LexConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
