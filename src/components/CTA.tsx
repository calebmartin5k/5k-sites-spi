import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-spi-red relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-white/80 mb-4 block">
          Since 1986
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-10 max-w-4xl mx-auto leading-tight">
          Quality Used Packaging and Processing Equipment
        </h2>
        
        <a href="/contact-us" className="inline-flex items-center gap-3 bg-spi-dark text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors group">
          Contact Us Now!
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
