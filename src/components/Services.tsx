"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, DollarSign, Wrench, Globe, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Used Industrial Equipment',
    desc: 'Browse our used industrial equipment inventory online or visit our 110,000 square foot warehouse conveniently located in Louisville, KY just minutes from Louisville International Airport.',
    icon: Package,
  },
  {
    id: '02',
    title: 'We Buy Used Equipment',
    desc: 'Special Projects purchases single items or entire plants. Salvaged equipment can be applied as credit to help keep your plant renovation costs low.',
    icon: DollarSign,
  },
  {
    id: '03',
    title: 'Rigging & Dismantling',
    desc: 'We can help you meet your deadline with minimal disruption to your operations. Our dismantling team offers outstanding experience, reliability and safety!',
    icon: Wrench,
  },
  {
    id: '04',
    title: 'We Export Internationally',
    desc: 'Special Projects offers outstanding values in quality used equipment and exports worldwide!',
    icon: Globe,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card');
      
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-spi-dark bg-grid-pattern relative border-t border-spi-border">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 border border-spi-red flex items-center justify-center">
                <div className="w-1 h-1 bg-spi-red"></div>
              </div>
              <span className="font-mono text-[10px] text-spi-red uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              What We <span className="text-spi-border">Do</span>
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm text-spi-muted font-light">
              Deployment of state-of-the-art equipment for specialized industrial operations.
            </p>
            <div className="flex gap-1 md:justify-end mt-4">
              <div className="w-2 h-2 bg-spi-red"></div>
              <div className="w-2 h-2 bg-spi-red/50"></div>
              <div className="w-2 h-2 bg-spi-red/20"></div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-spi-border border border-spi-border">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card bg-spi-surface p-10 group hover:bg-[#161616] transition-colors relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-12">
                <div className="w-12 h-12 bg-spi-dark border border-spi-border flex items-center justify-center text-spi-red group-hover:border-spi-red group-hover:bg-spi-red/10 transition-colors">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-spi-red tracking-widest">{service.id} //</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-spi-red transition-colors">
                {service.title}
              </h3>
              <p className="text-spi-muted text-sm font-light leading-relaxed mb-12 min-h-[80px]">
                {service.desc}
              </p>

              {/* Bottom Bar */}
              <div className="flex justify-between items-center border-t border-spi-border pt-6 mt-auto">
                <span className="font-mono text-[10px] text-spi-muted group-hover:text-spi-red transition-colors tracking-widest uppercase">
                  Learn More
                </span>
                <ArrowUpRight size={16} className="text-spi-muted group-hover:text-spi-red transition-colors" />
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-spi-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
