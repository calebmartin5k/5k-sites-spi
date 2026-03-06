"use client";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-spi-surface/80 backdrop-blur-md border border-spi-border p-6">
        <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
          Velocity Trend Analysis
        </h3>
        {/* Placeholder for chart - we use a CSS representation to avoid heavy chart libs for the prototype */}
        <div className="h-64 flex items-end justify-between gap-2 pt-10 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-full h-px bg-spi-border/50"></div>
            ))}
          </div>
          
          {/* Bars */}
          {[40, 45, 30, 60, 75, 50, 40, 55, 80, 65, 50, 70].map((height, i) => (
            <div key={i} className="w-full relative group">
              <div 
                className="absolute bottom-0 w-full bg-spi-dark border border-spi-border group-hover:bg-spi-border transition-colors"
                style={{ height: `${height}%` }}
              ></div>
              <div 
                className="absolute bottom-0 w-full bg-spi-red/80 border border-spi-red"
                style={{ height: `${height * 0.4}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-mono text-spi-muted">
          <span>Jan</span>
          <span>Apr</span>
          <span>Jul</span>
          <span>Oct</span>
          <span>Dec</span>
        </div>
      </div>

      <div className="bg-spi-surface/80 backdrop-blur-md border border-spi-border p-6">
        <h3 className="font-mono text-sm text-spi-red uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-spi-red rounded-sm"></span>
          Risk Distribution
        </h3>
        <div className="h-64 flex items-center justify-center relative">
          {/* Circular representation of risk */}
          <div className="w-48 h-48 rounded-full border-8 border-spi-dark relative flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="96" cy="96" r="92" fill="none" stroke="currentColor" className="text-emerald-500/80" strokeWidth="8" strokeDasharray="578" strokeDashoffset="0"></circle>
              <circle cx="96" cy="96" r="92" fill="none" stroke="currentColor" className="text-amber-500/80" strokeWidth="8" strokeDasharray="578" strokeDashoffset="340"></circle>
              <circle cx="96" cy="96" r="92" fill="none" stroke="currentColor" className="text-spi-red/80" strokeWidth="8" strokeDasharray="578" strokeDashoffset="500"></circle>
            </svg>
            <div className="text-center">
              <div className="text-3xl font-black">2,410</div>
              <div className="text-[10px] font-mono text-spi-muted uppercase tracking-widest">Total Assets</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-mono text-spi-muted">
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-sm"></span> Low</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-sm"></span> Med</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-spi-red rounded-sm"></span> High Risk</span>
        </div>
      </div>
    </div>
  );
}