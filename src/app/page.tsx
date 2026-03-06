import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Featured from '../components/Featured';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-spi-dark text-spi-text selection:bg-spi-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Featured />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
