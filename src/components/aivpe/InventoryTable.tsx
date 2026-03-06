"use client";

import { useState } from 'react';
import { ArrowUpDown, AlertTriangle, CheckCircle2, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const mockInventory = [
  { id: 'SPI-7892', name: 'Stainless Steel Mixing Tank 500G', category: 'Tanks', daysInStock: 214, monthlyCost: 45, demandScore: 3.2, riskScore: 'High', status: 'Aged' },
  { id: 'SPI-1042', name: 'Inline Piston Filler', category: 'Fillers', daysInStock: 12, monthlyCost: 25, demandScore: 8.9, riskScore: 'Low', status: 'Active' },
  { id: 'SPI-4411', name: 'Rotary Labeler', category: 'Labelers', daysInStock: 45, monthlyCost: 30, demandScore: 6.5, riskScore: 'Medium', status: 'Active' },
  { id: 'SPI-9901', name: 'Capper Machine 120bpm', category: 'Cappers', daysInStock: 180, monthlyCost: 35, demandScore: 4.1, riskScore: 'High', status: 'Aged' },
  { id: 'SPI-2234', name: 'Sanitary Conveyor 20ft', category: 'Conveyors', daysInStock: 5, monthlyCost: 15, demandScore: 9.2, riskScore: 'Low', status: 'New Arrival' },
  { id: 'SPI-5512', name: 'High Shear Mixer 20HP', category: 'Mixers', daysInStock: 88, monthlyCost: 55, demandScore: 7.1, riskScore: 'Medium', status: 'Active' },
  { id: 'SPI-8820', name: 'Shrink Wrap Tunnel', category: 'Wrappers', daysInStock: 310, monthlyCost: 40, demandScore: 2.1, riskScore: 'High', status: 'Aged' },
  { id: 'SPI-3391', name: 'Jacketed Kettle 1000G', category: 'Tanks', daysInStock: 21, monthlyCost: 60, demandScore: 8.5, riskScore: 'Low', status: 'Active' },
  { id: 'SPI-7102', name: 'Centrifugal Pump 5HP', category: 'Pumps', daysInStock: 145, monthlyCost: 10, demandScore: 5.4, riskScore: 'Medium', status: 'Active' },
  { id: 'SPI-1188', name: 'Checkweigher System', category: 'Scales', daysInStock: 2, monthlyCost: 20, demandScore: 9.5, riskScore: 'Low', status: 'New Arrival' },
];

export default function InventoryTable() {
  const router = useRouter();

  const handleReviewPricing = (id: string) => {
    router.push(`/aivpe?tab=map&asset=${id}`);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-spi-muted" />
          <input 
            type="text" 
            placeholder="Search equipment ID, name..." 
            className="bg-spi-dark border border-spi-border pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-spi-red w-64 transition-colors"
          />
        </div>
        <button className="bg-spi-dark border border-spi-border px-4 py-2 text-sm text-spi-muted hover:text-white transition-colors flex items-center gap-2">
          Filter <ArrowUpDown size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-spi-muted uppercase font-mono tracking-widest bg-spi-dark/50 border-b border-spi-border">
            <tr>
              <th className="px-6 py-4 font-normal">Asset ID</th>
              <th className="px-6 py-4 font-normal">Equipment Name</th>
              <th className="px-6 py-4 font-normal">Days In Stock</th>
              <th className="px-6 py-4 font-normal">Holding Cost/Mo</th>
              <th className="px-6 py-4 font-normal">Velocity Score</th>
              <th className="px-6 py-4 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockInventory.map((item, i) => (
              <tr key={i} className="border-b border-spi-border hover:bg-spi-dark/30 transition-colors group">
                <td className="px-6 py-4 font-mono text-spi-muted">{item.id}</td>
                <td className="px-6 py-4 font-medium text-white">{item.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs ${item.daysInStock > 180 ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'text-spi-muted'}`}>
                    {item.daysInStock > 180 && <AlertTriangle size={12} />}
                    {item.daysInStock} Days
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-spi-muted">${item.monthlyCost}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-spi-dark rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.demandScore > 7 ? 'bg-emerald-500' : item.demandScore > 4 ? 'bg-amber-500' : 'bg-spi-red'}`} 
                        style={{ width: `${item.demandScore * 10}%` }}
                      ></div>
                    </div>
                    <span className="font-mono text-xs">{item.demandScore}/10</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => handleReviewPricing(item.id)}
                    className="text-xs font-bold uppercase tracking-wider text-spi-red hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Locate Asset
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}