"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ValuesEtching() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(textRef.current, {
        clipPath: "inset(0% 100% 0% 0%)"
      });

      gsap.set(laserRef.current, {
        left: "0%",
        opacity: 0,
      });

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
        delay: 0.6 // Wait slightly for page load
      });

      // Fade in laser
      tl.to(laserRef.current, {
        opacity: 1,
        duration: 0.1,
      });

      // Move laser across and reveal text simultaneously
      tl.to(laserRef.current, {
        left: "100%",
        duration: 1.2,
        ease: "power1.inOut",
      }, "scan");

      tl.to(textRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power1.inOut",
      }, "scan");

      // Fade out laser
      tl.to(laserRef.current, {
        opacity: 0,
        duration: 0.1,
      });

      // Optional: Add a slight flicker to the laser for the welding/sparks effect
      gsap.to(laserRef.current, {
        opacity: 0.6,
        duration: 0.05,
        yoyo: true,
        repeat: -1,
        ease: "rough({ template: none.out, strength: 1, points: 10, taper: none, randomize: true, clamp: false })"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isAnimating]);

  if (!isAnimating) {
    return <span className="text-spi-red">VALUES</span>;
  }

  return (
    <span ref={containerRef} className="relative inline-block text-spi-red">
      {/* Invisible placeholder to maintain layout width in the flow */}
      <span className="opacity-0">VALUES</span>

      {/* The actual revealed text */}
      <span 
        ref={textRef} 
        className="absolute inset-0"
        style={{ clipPath: "inset(0% 100% 0% 0%)" }}
      >
        VALUES
      </span>

      {/* The scanning laser line */}
      <div 
        ref={laserRef}
        className="absolute top-[-5%] bottom-[-5%] w-[4px] bg-white z-10 rounded-full"
        style={{ 
          boxShadow: '0 0 15px 4px rgba(255, 51, 0, 0.9), 0 0 30px 10px rgba(255, 51, 0, 0.4)',
          left: '0%',
          transform: 'translateX(-50%)' // Center the laser on the reveal line
        }}
      />
    </span>
  );
}
