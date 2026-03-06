import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import categoriesData from './categories.json';
import Link from 'next/link';

export default function EquipmentPage() {
  const letters = Object.keys(categoriesData).sort();

  return (
    <div className="min-h-screen bg-spi-dark text-spi-text selection:bg-spi-red selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        
        {/* Background gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-spi-dark/80 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4">
              Equipment <span className="text-spi-red">Directory</span>
            </h1>
            <p className="text-spi-muted text-lg font-light">
              Comprehensive index of our processing and packaging inventory.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            
            {/* Vertical timeline spine */}
            <div className="absolute left-[24px] md:left-[80px] top-0 bottom-0 w-px bg-spi-border z-0"></div>

            <div className="flex flex-col gap-32 relative z-10">
              {letters.map((letter) => (
                <div key={letter} className="relative pl-16 md:pl-40 group pb-8">
                  
                  {/* Huge faint background letter */}
                  <div className="absolute left-0 top-0 text-[140px] md:text-[240px] font-black text-spi-muted/20 select-none pointer-events-none -mt-12 md:-mt-24 -ml-4 md:-ml-8 z-0 transition-colors duration-500 group-hover:text-spi-muted/40">
                    {letter}
                  </div>
                  
                  {/* Red node on timeline */}
                  <div className="absolute left-[24px] md:left-[80px] top-4 w-2 h-2 bg-spi-dark border-2 border-spi-red rounded-full -translate-x-1/2 z-20 group-hover:scale-150 transition-transform"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 relative z-10 pt-4">
                    {/* @ts-ignore */}
                    {categoriesData[letter as keyof typeof categoriesData].map((category: { href: string, name: string }, idx: number) => (
                      <Link 
                        key={idx}
                        href={category.href} 
                        className="flex items-center text-sm md:text-base text-spi-muted hover:text-white transition-colors py-1 border-b border-transparent hover:border-spi-red/50 w-max"
                      >
                        <span className="text-spi-red opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 mr-2 text-[10px]">■</span>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
