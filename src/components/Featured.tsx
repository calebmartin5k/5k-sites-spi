"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const specials = [
  { id: 'spc9072', title: 'Used Avery Weigh-Tronix digital scale For Sale' },
  { id: 'spc4549', title: 'Used Bemis case taper For Sale' },
  { id: 'spc7791', title: 'Used Filterite Corp. cartridge filter For Sale' },
  { id: 'spc9114', title: 'Used agitator shaft Stainless Steel For Sale' },
  { id: 'spc4561', title: 'Used .3 hp top mount agitator For Sale' },
  { id: 'spc7969', title: 'Used Premier horizontal media mill For Sale' },
];

export default function Featured() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.special-row');
      
      gsap.from(rows, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-spi-dark border-t border-spi-border">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Featured <span className="text-spi-red">Specials</span>
          </h2>
        </div>

        <div className="border border-spi-border bg-spi-surface">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-spi-border font-mono text-[10px] text-spi-muted uppercase tracking-widest hidden md:grid">
            <div className="col-span-2">Image</div>
            <div className="col-span-8">Description</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {specials.map((item, i) => (
              <a 
                key={item.id} 
                href={`/equipment/${item.id}`}
                className={`special-row grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 items-center group hover:bg-[#1a1a1a] transition-colors ${i !== specials.length - 1 ? 'border-b border-spi-border' : ''}`}
              >
                {/* Image Placeholder */}
                <div className="col-span-1 md:col-span-2">
                  <div className="w-full aspect-video bg-spi-dark border border-spi-border flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                    <span className="font-mono text-[10px] text-spi-muted relative z-10">NO IMAGE</span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="col-span-1 md:col-span-8">
                  <h4 className="text-lg font-bold group-hover:text-spi-red transition-colors">{item.title}</h4>
                  <span className="font-mono text-[10px] text-spi-muted mt-2 block">ID: {item.id.toUpperCase()}</span>
                </div>
                
                {/* Action */}
                <div className="col-span-1 md:col-span-2 md:text-right mt-4 md:mt-0">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-spi-red uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    View More <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
