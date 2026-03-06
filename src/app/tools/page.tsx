import { Wrench, Settings, ArrowRight, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-spi-dark pt-32 pb-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 border border-spi-red flex items-center justify-center">
              <div className="w-1 h-1 bg-spi-red animate-pulse"></div>
            </div>
            <span className="font-mono text-[10px] text-spi-red uppercase tracking-widest">Digital Solutions Showcase</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Custom Software <span className="text-spi-red">Solutions</span>
          </h1>
          <div className="prose prose-invert max-w-none text-spi-muted font-light leading-relaxed">
            <p className="text-lg border-l-2 border-spi-red pl-6 mb-6">
              We understand that every industrial business faces unique challenges that off-the-shelf software can't solve. 
              While we don't know your exact internal pain points yet, we conducted deep research into the secondary equipment market to build these two functional prototype tools. 
            </p>
            <p>
              Our goal with these prototypes is to demonstrate that <strong>we can build highly complex, custom software tailored specifically to your operational needs.</strong> Whether you need to streamline internal inventory or create an interactive buying experience for your customers, we can architect the solution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Internal Tool */}
          <div className="bg-spi-surface border border-spi-border p-8 group hover:border-spi-red/50 transition-colors relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <LineChart size={80} className="text-spi-red" />
            </div>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-spi-dark border border-spi-border text-xs font-mono text-spi-muted mb-4 uppercase tracking-widest">Internal Operations Tool</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-spi-red transition-colors">Inventory Velocity & Pricing Engine</h2>
              <p className="text-sm font-mono text-spi-red">AIVPE</p>
            </div>
            
            <div className="space-y-4 text-spi-muted font-light text-sm mb-8 flex-grow">
              <p>
                <strong>The Concept:</strong> Managing a 110,000 sq ft warehouse full of heavy machinery is difficult. Equipment sitting on the floor costs money in space and interest (floor-plan financing). 
              </p>
              <p>
                <strong>What It Does:</strong> This tool acts as a "mission control" dashboard for the sales and operations team. It automatically assigns a "Velocity Score" to every piece of equipment based on how long it has been in the warehouse, its storage costs, and market demand.
              </p>
              <p>
                <strong>Example Use Case:</strong> A salesperson logs into the dashboard and sees that a large Stainless Steel Mixing Tank has a high risk score. It has been sitting for 200 days and costs $50/month in floor space. The tool automatically suggests dropping the price by 15% to move the inventory, freeing up capital for faster-selling assets.
              </p>
            </div>

            <Link href="/aivpe" className="inline-flex items-center justify-between w-full border border-spi-red bg-spi-red/10 text-spi-red hover:bg-spi-red hover:text-white px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all">
              Launch Internal Dashboard
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Customer Facing Tool */}
          <div className="bg-spi-surface border border-spi-border p-8 group hover:border-spi-red/50 transition-colors relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Settings size={80} className="text-spi-red" />
            </div>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-spi-dark border border-spi-border text-xs font-mono text-spi-muted mb-4 uppercase tracking-widest">Customer-Facing Tool</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-spi-red transition-colors">Interactive Production Line Architect</h2>
              <p className="text-sm font-mono text-spi-red">IPLA</p>
            </div>
            
            <div className="space-y-4 text-spi-muted font-light text-sm mb-8 flex-grow">
              <p>
                <strong>The Concept:</strong> Buyers are hesitant to purchase used equipment because they fear it won't be compatible with their existing production line. They need reassurance before they buy.
              </p>
              <p>
                <strong>What It Does:</strong> This interactive web tool allows potential buyers to visually drag-and-drop equipment from your inventory to build a virtual production line. It automatically checks for voltage compatibility, throughput bottlenecks, and calculates the total cost.
              </p>
              <p>
                <strong>Example Use Case:</strong> A plant manager needs to expand a bottling line. They use this tool to connect a used Filler Machine to a used Capping Machine. The tool instantly flags a warning: <em>"Incompatible: Filler runs at 120 bottles/min, Capper maxes at 60 bottles/min."</em> The customer adjusts their selection, gaining massive trust in your platform, and proceeds to request a quote.
              </p>
            </div>

            <Link href="/architect" className="inline-flex items-center justify-between w-full border border-spi-red bg-spi-red/10 text-spi-red hover:bg-spi-red hover:text-white px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all">
              Launch Customer Architect
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}