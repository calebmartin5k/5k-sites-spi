"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import ValuesEtching from './ValuesEtching';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax/scale
      gsap.from(bgRef.current, {
        scale: 1.1,
        duration: 2,
        ease: 'power3.out',
      });

      // Text reveal
      const lines = textRef.current?.querySelectorAll('.reveal-text');
      if (lines) {
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.2,
        });
      }

      // Small elements fade in
      gsap.from('.fade-in-element', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/spi.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-spi-dark/40 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-spi-dark/70 via-spi-dark/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full justify-between">
          <div className="flex-1 max-w-4xl w-full">
            {/* Status Badge */}
          <div className="fade-in-element flex items-center gap-3 mb-8">
            <div className="px-3 py-1 border border-spi-red text-spi-red font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
              ESTABLISHED 1986
            </div>
            <div className="h-[1px] w-16 bg-spi-border"></div>
          </div>

          {/* Main Headline */}
          <div ref={textRef} className="overflow-hidden mb-6">
            <h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              Outstanding <br />
              <ValuesEtching /> In <br />
              Used Equipment
            </h1>
          </div>

          {/* Subheadline */}
          <div className="overflow-hidden mb-10">
            <p className="reveal-text text-lg md:text-xl text-spi-muted max-w-2xl font-light border-l-2 border-spi-red pl-6">
              Special Projects offers outstanding values in quality used packaging and processing equipment, and exports worldwide!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-element flex flex-wrap items-center gap-6">
            <a href="#" className="bg-spi-red hover:bg-spi-red-hover text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-3 transition-colors group">
              Browse Inventory
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-spi-border hover:border-white px-8 py-4 font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-colors group">
              <span className="text-spi-red group-hover:text-white transition-colors">▶</span> View Capabilities
            </a>
          </div>
          </div>
          
          {/* Why SPI Box (Right Side) */}
          <div className="hidden lg:block w-full lg:w-[400px] xl:w-[450px] fade-in-element flex-shrink-0">
            <div className="bg-spi-dark/80 backdrop-blur-md border border-spi-border p-8 relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-spi-red to-transparent"></div>
              <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
                Why SPI
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 group/item">
                  <div className="text-spi-red font-mono text-xs mt-1">01</div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight mb-1 group-hover/item:text-spi-red transition-colors">Global Reach</h4>
                    <p className="text-sm text-spi-muted font-light">Worldwide export capabilities for all processing equipment.</p>
                  </div>
                </li>
                <li className="flex gap-4 group/item">
                  <div className="text-spi-red font-mono text-xs mt-1">02</div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight mb-1 group-hover/item:text-spi-red transition-colors">Expert Dismantling</h4>
                    <p className="text-sm text-spi-muted font-light">Safe, reliable, and minimal disruption to operations.</p>
                  </div>
                </li>
                <li className="flex gap-4 group/item">
                  <div className="text-spi-red font-mono text-xs mt-1">03</div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-tight mb-1 group-hover/item:text-spi-red transition-colors">Asset Recovery</h4>
                    <p className="text-sm text-spi-muted font-light">We buy single items to entire plants for max value.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 fade-in-element flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-spi-muted uppercase tracking-widest rotate-90 origin-right translate-x-3">Scroll</span>
        <div className="w-[1px] h-12 bg-spi-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-spi-red animate-[scrollDown_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
