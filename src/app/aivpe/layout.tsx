import { Metadata } from "next";
import Link from "next/link";
import { 
  LayoutDashboard, 
  PackageSearch, 
  Map, 
  Settings, 
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIVPE | Special Projects International",
  description: "Automated Inventory Velocity and Pricing Engine",
};

export default function AIVPELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-spi-dark text-spi-text flex selection:bg-spi-red selection:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-spi-border bg-spi-surface hidden md:flex flex-col">
        <div className="p-6 border-b border-spi-border">
          <h1 className="font-black text-xl tracking-tighter uppercase flex items-center gap-2">
            <span className="text-spi-red">SPI</span> AIVPE
          </h1>
          <p className="text-[10px] font-mono text-spi-muted tracking-widest mt-1 uppercase">
            Internal Systems
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/aivpe?tab=dashboard" className="flex items-center gap-3 px-4 py-3 text-spi-muted hover:bg-spi-border hover:text-white font-mono text-sm uppercase tracking-wider transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/aivpe?tab=inventory" className="flex items-center gap-3 px-4 py-3 text-spi-muted hover:bg-spi-border hover:text-white font-mono text-sm uppercase tracking-wider transition-colors">
            <PackageSearch size={18} />
            Inventory
          </Link>
          <Link href="/aivpe?tab=map" className="flex items-center gap-3 px-4 py-3 text-spi-muted hover:bg-spi-border hover:text-white font-mono text-sm uppercase tracking-wider transition-colors">
            <Map size={18} />
            Lot Locator
          </Link>
        </nav>

        <div className="p-4 border-t border-spi-border space-y-2">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-spi-muted hover:text-white font-mono text-xs uppercase tracking-wider transition-colors">
            <Settings size={16} />
            Settings
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-spi-muted hover:text-spi-red font-mono text-xs uppercase tracking-wider transition-colors">
            <ArrowLeft size={16} />
            Exit to Public Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-spi-border bg-spi-surface/50 backdrop-blur-sm flex items-center justify-between px-8 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 bg-spi-red text-white font-mono text-[10px] tracking-widest uppercase">
              Live Environment
            </div>
            <span className="font-mono text-xs text-spi-muted">Louisville Hub - Active</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-spi-muted">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-spi-border border border-spi-red/50 flex items-center justify-center">
              <span className="text-spi-red font-bold text-xs">AD</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 relative">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
