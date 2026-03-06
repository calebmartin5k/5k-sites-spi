import Navbar from '../../components/Navbar';
import ProductionLineArchitect from '../../components/architect/ProductionLineArchitect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Production Line Architect | SPI',
  description: 'Design and analyze your next industrial production line with real-time TCO and OEE metrics.',
};

export default function ArchitectPage() {
  return (
    <div className="min-h-screen bg-spi-dark text-spi-text selection:bg-spi-red selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <ProductionLineArchitect />
      </main>
    </div>
  );
}
