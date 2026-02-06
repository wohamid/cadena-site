import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Stats />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
