import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProblemStatement from '@/components/ProblemStatement';
import Services from '@/components/Services';
import Autopilot from '@/components/Autopilot';
import WhyCadena from '@/components/WhyCadena';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <Services />
      <Autopilot />
      <WhyCadena />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
