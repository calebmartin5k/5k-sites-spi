"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-spi-dark/90 backdrop-blur-md border-spi-border py-2' : 'bg-transparent border-transparent py-4'}`}>
      {/* Top Bar - Contact Info */}
      <div className="container mx-auto px-6 flex justify-between items-center text-xs font-mono text-spi-muted mb-2 hidden md:flex">
        <div className="flex items-center gap-6">
          <a href="tel:502-778-3883" className="flex items-center gap-2 hover:text-spi-red transition-colors">
            <Phone size={14} /> 502-778-3883
          </a>
          <a href="mailto:sales@specialprojects.com" className="flex items-center gap-2 hover:text-spi-red transition-colors">
            <Mail size={14} /> sales@specialprojects.com
          </a>
        </div>
        <div className="uppercase tracking-widest">
          Quality Used Packaging and Processing Equipment - since 1986
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src="https://specialprojects.com/themes/special-projects/assets/images/spi-logo.png" 
            alt="Special Projects International" 
            className="h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="/equipment" className="hover:text-spi-red transition-colors">Equipment</a>
          <a href="/services" className="hover:text-spi-red transition-colors">Services</a>
          
          {/* Tools Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-spi-red transition-colors py-2">
              Tools <ChevronDown size={14} />
            </div>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-spi-dark border border-spi-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/tools" className="block px-4 py-3 text-sm hover:bg-spi-surface hover:text-spi-red transition-colors border-b border-spi-border">Tools Overview</a>
              <a href="/architect" className="block px-4 py-3 text-sm hover:bg-spi-surface hover:text-spi-red transition-colors border-b border-spi-border">Line Architect (Client)</a>
              <a href="/aivpe" className="block px-4 py-3 text-sm hover:bg-spi-surface hover:text-spi-red transition-colors">Inventory Engine (Internal)</a>
            </div>
          </div>
          
          <a href="/contact-us" className="hover:text-spi-red transition-colors">Contact Us</a>
          
          <button className="flex items-center gap-2 border border-spi-border px-4 py-2 hover:border-spi-red hover:text-spi-red transition-all">
            <ShoppingCart size={16} />
            <span className="font-mono text-xs">QUOTE CART (0)</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-spi-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-spi-dark border-b border-spi-border absolute top-full left-0 w-full px-6 py-4 flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
          <a href="/equipment" className="hover:text-spi-red transition-colors block py-2 border-b border-spi-border/50">Equipment</a>
          <a href="/services" className="hover:text-spi-red transition-colors block py-2 border-b border-spi-border/50">Services</a>
          
          <div className="py-2 border-b border-spi-border/50">
            <div className="text-spi-muted mb-2 text-xs">TOOLS</div>
            <div className="flex flex-col gap-2 pl-4 border-l border-spi-border">
              <a href="/tools" className="hover:text-spi-red transition-colors block py-1">Tools Overview</a>
              <a href="/architect" className="hover:text-spi-red transition-colors block py-1">Line Architect (Client)</a>
              <a href="/aivpe" className="hover:text-spi-red transition-colors block py-1">Inventory Engine (Internal)</a>
            </div>
          </div>
          
          <a href="/contact-us" className="hover:text-spi-red transition-colors block py-2">Contact Us</a>
        </div>
      )}
    </header>
  );
}
