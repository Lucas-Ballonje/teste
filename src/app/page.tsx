import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Specialties from '@/components/sections/Specialties';
import WhyUs from '@/components/sections/WhyUs';
import Schedule from '@/components/sections/Schedule';
import WhatsappButton from '@/components/WhatsappButton';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Specialties />
        <WhyUs />
        <Schedule />
      </main>
      <WhatsappButton />
      <Footer />
    </div>
  );
}
