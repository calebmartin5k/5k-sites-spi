"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import InventoryTable from '../../components/aivpe/InventoryTable';
import DashboardCharts from '../../components/aivpe/DashboardCharts';
import WarehouseMap from '../../components/aivpe/WarehouseMap';
import { Activity, TrendingDown, TrendingUp, AlertTriangle, LayoutDashboard, PackageSearch, Map } from 'lucide-react';

function DashboardContent() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inventory' | 'map'>('dashboard');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'inventory' || tab === 'map') {
      setActiveTab(tab);
    } else {
      setActiveTab('dashboard');
    }
  }, [searchParams]);

  const handleTabChange = (tab: 'dashboard' | 'inventory' | 'map') => {
    setActiveTab(tab);
    router.push(`/aivpe?tab=${tab}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-spi-border pb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Velocity <span className="text-spi-red">Command Center</span>
          </h2>
          <p className="text-spi-muted font-light text-sm max-w-2xl">
            Automated Inventory Velocity and Pricing Engine. Real-time metrics on asset liquidity, market comps, and velocity scoring.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-spi-dark border border-spi-border p-1">
          <button 
            onClick={() => handleTabChange('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === 'dashboard' ? 'bg-spi-surface text-white border border-spi-border/50' : 'text-spi-muted hover:text-white'}`}
          >
            <LayoutDashboard size={14} />
            Metrics
          </button>
          <button 
            onClick={() => handleTabChange('inventory')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === 'inventory' ? 'bg-spi-surface text-white border border-spi-border/50' : 'text-spi-muted hover:text-white'}`}
          >
            <PackageSearch size={14} />
            Inventory
          </button>
          <button 
            onClick={() => handleTabChange('map')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === 'map' ? 'bg-spi-surface text-white border border-spi-border/50' : 'text-spi-muted hover:text-white'}`}
          >
            <Map size={14} />
            Locator
          </button>
        </div>
      </div>

      {activeTab === 'dashboard' && (
        <div className="animate-in fade-in duration-500">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <KPICard 
              title="Total Warehouse Value" 
              value="$12.4M" 
              trend="+2.4%" 
              trendUp={true}
              icon={<Activity className="text-spi-red" size={20} />}
            />
            <KPICard 
              title="Avg Velocity Score" 
              value="78/100" 
              trend="+5.1%" 
              trendUp={true}
              icon={<TrendingUp className="text-emerald-500" size={20} />}
            />
            <KPICard 
              title="Aging Iron (&gt;180 Days)" 
              value="14 Units" 
              trend="-2" 
              trendUp={true} // fewer is better
              icon={<TrendingDown className="text-emerald-500" size={20} />}
            />
            <KPICard 
              title="High Liquidity Risk" 
              value="3 Assets" 
              trend="Action Req" 
              trendUp={false}
              icon={<AlertTriangle className="text-amber-500" size={20} />}
              alert={true}
            />
          </div>

          {/* Charts Section */}
          <div className="mb-8">
            <DashboardCharts />
          </div>

          {/* Main Data Grid */}
          <div className="bg-spi-surface/80 backdrop-blur-md border border-spi-border flex flex-col">
            <div className="p-6 border-b border-spi-border flex items-center justify-between">
              <div>
                <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
                  Live Inventory Assets
                </h3>
                <p className="text-xs text-spi-muted mt-1">Showing real-time data from all warehouse zones</p>
              </div>
            </div>
            <div className="p-6">
              <InventoryTable />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        <div className="animate-in fade-in duration-500">
          <div className="bg-spi-surface/80 backdrop-blur-md border border-spi-border flex flex-col">
            <div className="p-6 border-b border-spi-border flex items-center justify-between">
              <div>
                <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
                  Full Inventory Database
                </h3>
                <p className="text-xs text-spi-muted mt-1">Showing all active and aged assets</p>
              </div>
            </div>
            <div className="p-6">
              <InventoryTable />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'map' && (
        <div className="animate-in fade-in duration-500">
          <WarehouseMap />
        </div>
      )}
    </>
  );
}

function KPICard({ title, value, trend, trendUp, icon, alert = false }: { title: string, value: string, trend: string, trendUp: boolean, icon: React.ReactNode, alert?: boolean }) {
  return (
    <div className={`p-6 border ${alert ? 'border-amber-500/50 bg-amber-500/5' : 'border-spi-border bg-spi-surface/80'} backdrop-blur-md relative overflow-hidden group`}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-spi-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xs font-mono text-spi-muted uppercase tracking-widest">{title}</h4>
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-black tracking-tighter">{value}</div>
        <div className={`text-xs font-mono mb-1 ${alert ? 'text-amber-500' : (trendUp ? 'text-emerald-500' : 'text-spi-red')}`}>
          {trend}
        </div>
      </div>
    </div>
  );
}

export default function AIVPEDashboard() {
  return (
    <Suspense fallback={<div className="p-8 text-spi-muted font-mono text-xs uppercase tracking-widest animate-pulse">Initializing AIVPE Systems...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
