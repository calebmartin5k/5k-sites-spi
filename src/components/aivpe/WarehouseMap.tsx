"use client";

import { MapPin } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function WarehouseMap() {
  const searchParams = useSearchParams();
  const assetId = searchParams.get('asset') || 'SPI-7892';

  // Simple mock function to get a zone based on the asset ID string
  const getZoneForAsset = (id: string) => {
    // Make sure we have a valid ID string and handle edge cases
    if (!id || typeof id !== 'string' || id.length < 5) {
      return { zone: 'A', id: 'A-01', pos: 'top-1/4 left-1/2' };
    }
    
    const char = id.charAt(4); // gets the first number after SPI-
    const num = parseInt(char);
    
    if (isNaN(num)) return { zone: 'A', id: 'A-01', pos: 'top-1/4 left-1/2' };
    
    if (num < 3) return { zone: 'A', id: 'A-12', pos: 'top-1/4 left-1/2' };
    if (num < 5) return { zone: 'B', id: 'B-04', pos: 'top-1/2 left-1/4' };
    if (num < 7) return { zone: 'C', id: 'C-09', pos: 'top-3/4 left-1/2' };
    if (num < 9) return { zone: 'D', id: 'D-04', pos: 'top-1/2 left-1/3' };
    return { zone: 'E', id: 'E-02', pos: 'top-1/2 left-1/2' };
  };

  const locationInfo = getZoneForAsset(assetId);

  return (
    <div className="bg-spi-surface/80 backdrop-blur-md border border-spi-border flex flex-col h-[600px]">
      <div className="p-6 border-b border-spi-border flex items-center justify-between">
        <div>
          <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
            Facility Layout
          </h3>
          <p className="text-xs text-spi-muted mt-1">Louisville Hub - 110,000 sq ft</p>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-spi-dark border border-spi-border text-[10px] font-mono text-spi-muted">Aisle View</span>
          <span className="px-2 py-1 bg-spi-dark border border-spi-border text-[10px] font-mono text-spi-muted">Zone View</span>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex items-center justify-center relative bg-spi-dark/50">
        {/* Abstract Warehouse Blueprint */}
        <div className="w-full max-w-3xl aspect-[16/9] border-2 border-spi-border relative grid grid-cols-4 grid-rows-3 gap-2 p-2">
          
          {/* Zones */}
          <div className="col-span-1 row-span-3 border border-spi-border/50 bg-spi-surface/30 relative flex items-center justify-center group hover:bg-spi-surface transition-colors cursor-pointer overflow-hidden">
            <span className="font-mono text-spi-muted/50 text-4xl font-black">A</span>
            {locationInfo.zone === 'A' && (
              <div className={`absolute ${locationInfo.pos} -translate-x-1/2 -translate-y-1/2`}>
                <div className="relative">
                  <MapPin className="text-spi-red relative z-10 -mt-6" size={24} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-spi-red rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="col-span-2 row-span-1 border border-spi-border/50 bg-spi-surface/30 relative flex items-center justify-center group hover:bg-spi-surface transition-colors cursor-pointer overflow-hidden">
            <span className="font-mono text-spi-muted/50 text-4xl font-black">B</span>
            {locationInfo.zone === 'B' && (
              <div className={`absolute ${locationInfo.pos} -translate-x-1/2 -translate-y-1/2`}>
                <div className="relative">
                  <MapPin className="text-spi-red relative z-10 -mt-6" size={24} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-spi-red rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1 row-span-2 border border-spi-border/50 bg-spi-surface/30 relative flex items-center justify-center group hover:bg-spi-surface transition-colors cursor-pointer overflow-hidden">
            <span className="font-mono text-spi-muted/50 text-4xl font-black">C</span>
            {locationInfo.zone === 'C' && (
              <div className={`absolute ${locationInfo.pos} -translate-x-1/2 -translate-y-1/2`}>
                <div className="relative">
                  <MapPin className="text-spi-red relative z-10 -mt-6" size={24} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-spi-red rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2 row-span-2 border border-spi-border/50 bg-spi-surface/30 relative flex items-center justify-center group hover:bg-spi-surface transition-colors cursor-pointer overflow-hidden">
            <span className="font-mono text-spi-muted/50 text-4xl font-black">D</span>
            {locationInfo.zone === 'D' && (
              <div className={`absolute ${locationInfo.pos} -translate-x-1/2 -translate-y-1/2`}>
                <div className="relative">
                  <MapPin className="text-spi-red relative z-10 -mt-6" size={24} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-spi-red rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1 row-span-1 border border-spi-border/50 bg-spi-surface/30 relative flex items-center justify-center group hover:bg-spi-surface transition-colors cursor-pointer overflow-hidden">
            <span className="font-mono text-spi-muted/50 text-4xl font-black">E</span>
            {locationInfo.zone === 'E' && (
              <div className={`absolute ${locationInfo.pos} -translate-x-1/2 -translate-y-1/2`}>
                <div className="relative">
                  <MapPin className="text-spi-red relative z-10 -mt-6" size={24} />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-spi-red rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Legend Overlay */}
        <div className="absolute bottom-6 left-6 bg-spi-dark border border-spi-border p-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-2">Selected Asset</h4>
          <div className="flex flex-col gap-1 text-xs text-spi-muted">
            <div>ID: <span className="text-white font-mono">{assetId}</span></div>
            <div>Zone: <span className="text-white font-mono">{locationInfo.id}</span></div>
            <div className="text-spi-red mt-2 flex items-center gap-1"><MapPin size={12}/> Route Plotted</div>
          </div>
        </div>
      </div>
    </div>
  );
}