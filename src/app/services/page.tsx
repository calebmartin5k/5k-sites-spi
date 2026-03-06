import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Truck, Clock, DollarSign, Globe, Package, Cpu } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-spi-dark text-spi-text selection:bg-spi-red selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-spi-dark/80 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-4 h-4 border border-spi-red flex items-center justify-center">
                <div className="w-1 h-1 bg-spi-red"></div>
              </div>
              <span className="font-mono text-[10px] text-spi-red uppercase tracking-widest">Our Services</span>
              <div className="w-4 h-4 border border-spi-red flex items-center justify-center">
                <div className="w-1 h-1 bg-spi-red"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
              Full Lifecycle <span className="text-spi-red">Asset Management</span>
            </h1>
            <p className="text-spi-muted text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
              From acquiring single surplus machines to dismantling entire production facilities, Special Projects International provides end-to-end solutions for the secondary industrial equipment market.
            </p>
            <div className="h-[2px] w-24 bg-spi-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Feature 1 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <Package size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                Used Equipment Sales
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                Browse our massive 110,000 sq ft inventory of high-quality packaging and processing machinery. We provide cost-effective alternatives to new equipment with immediate lead times.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <DollarSign size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                Asset Acquisition
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                We buy surplus machinery, single units, or entire production facilities. Turn your idle iron into working capital, or apply salvaged equipment as credit to lower your renovation costs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <Truck size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                Rigging & Dismantling
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                Professional removal and relocation of heavy industrial equipment. We handle the complex logistics of extraction safely, ensuring your facility remains intact and secure.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                International Export
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                Located near a major international logistics hub, our team is highly experienced in preparing, crating, and shipping large-scale industrial machinery to facilities worldwide.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                Minimal Downtime
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                Working efficiently, we can help you meet your deadline with minimal disruption to your operations. Our dismantling team offers outstanding experience, reliability and safety.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-spi-surface border border-spi-border p-10 group hover:border-spi-red transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              <div className="w-16 h-16 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red mb-8 group-hover:bg-spi-red/10 transition-colors">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                Digital Architecture
              </h2>
              <p className="text-spi-muted text-sm font-light leading-relaxed">
                Leverage our custom Line Architect tool to plan your factory floor, or trust in our automated pricing engine to ensure you are getting fair, data-driven market value on every asset.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
