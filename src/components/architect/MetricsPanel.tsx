import { useIPLAStore, CompatibilityIssue } from './store';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertTriangle, CheckCircle2, ChevronRight, Truck } from 'lucide-react';

export default function MetricsPanel() {
  const nodes = useIPLAStore((state) => state.nodes);
  const edges = useIPLAStore((state) => state.edges);
  const distance = useIPLAStore((state) => state.shippingDistanceMiles);
  const setDistance = useIPLAStore((state) => state.setShippingDistance);
  const riggingRequired = useIPLAStore((state) => state.riggingRequired);
  const setRiggingRequired = useIPLAStore((state) => state.setRiggingRequired);
  const [expanded, setExpanded] = useState(true);

  const metrics = useMemo(() => {
    let equipmentCost = 0;
    let totalWeight = 0;
    
    nodes.forEach(node => {
      equipmentCost += node.data.price;
      totalWeight += node.data.weight_lbs;
    });

    // Estimates
    const riggingCost = riggingRequired ? nodes.length * 1500 : 0;
    const cratingCost = nodes.length * 500;
    // Rough estimate: $3 per mile per truckload (assuming 1 truckload for now) + $0.50 per lb over certain weight? 
    // Let's just do a simple formula: (Distance * 3) + (Weight * 0.2)
    const shippingCost = (distance * 3) + (totalWeight * 0.2);

    const tco = equipmentCost + riggingCost + cratingCost + shippingCost;

    // Compatibility Checks
    const issues: CompatibilityIssue[] = [];
    let systemOEE = 1;
    let minThroughput = Infinity;

    if (nodes.length > 0) {
      nodes.forEach(node => {
        systemOEE *= node.data.availability;
        if (node.data.throughput_ppm < minThroughput) {
          minThroughput = node.data.throughput_ppm;
        }
      });
      // Benchmark OEE (e.g. 0.85) to calculate a mock payback period
      // Let's mock a revenue generation: $0.10 profit per unit * ppm * 60 min * 8 hours * OEE
    } else {
      systemOEE = 0;
      minThroughput = 0;
    }

    edges.forEach(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      
      if (sourceNode && targetNode) {
        if (sourceNode.data.throughput_ppm > targetNode.data.throughput_ppm) {
          issues.push({
            type: 'bottleneck',
            message: `Bottleneck: ${sourceNode.data.name} (${sourceNode.data.throughput_ppm}ppm) into ${targetNode.data.name} (${targetNode.data.throughput_ppm}ppm)`,
            sourceId: sourceNode.id,
            targetId: targetNode.id,
          });
        }
        if (sourceNode.data.voltage !== targetNode.data.voltage) {
          issues.push({
            type: 'voltage',
            message: `Voltage Mismatch: ${sourceNode.data.name} (${sourceNode.data.voltage}) & ${targetNode.data.name} (${targetNode.data.voltage})`,
            sourceId: sourceNode.id,
            targetId: targetNode.id,
          });
        }
        if (sourceNode.data.conveyor_height_in !== targetNode.data.conveyor_height_in) {
          issues.push({
            type: 'height',
            message: `Height Mismatch: ${sourceNode.data.conveyor_height_in}" to ${targetNode.data.conveyor_height_in}"`,
            sourceId: sourceNode.id,
            targetId: targetNode.id,
          });
        }
      }
    });

    const dailyProfit = minThroughput * 60 * 8 * systemOEE * 0.10; // $0.10 per unit, 1 shift
    const paybackPeriodDays = tco > 0 && dailyProfit > 0 ? tco / dailyProfit : 0;
    const paybackPeriodMonths = paybackPeriodDays / 20; // 20 working days/mo

    return {
      equipmentCost,
      riggingCost,
      cratingCost,
      shippingCost,
      tco,
      issues,
      systemOEE: (systemOEE * 100).toFixed(1),
      paybackPeriodMonths: paybackPeriodMonths.toFixed(1)
    };
  }, [nodes, edges, distance, riggingRequired]);

  if (nodes.length === 0) return null;

  return (
    <div className="absolute right-6 top-6 w-80 bg-spi-surface/95 backdrop-blur-md border border-spi-border shadow-2xl flex flex-col z-10 overflow-hidden rounded-md">
      <div 
        className="p-4 bg-spi-dark/80 border-b border-spi-border flex justify-between items-center cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <Calculator size={16} className="text-spi-red" />
          <h3 className="font-bold text-sm uppercase tracking-wider">Line Analytics</h3>
        </div>
        <motion.div animate={{ rotate: expanded ? 90 : 0 }}>
          <ChevronRight size={16} className="text-spi-muted" />
        </motion.div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              
              {/* Financials */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono text-spi-muted uppercase tracking-widest border-b border-spi-border pb-1">Total Cost of Ownership</h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-spi-muted">Equipment</span>
                    <span>${metrics.equipmentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-spi-muted">Rigging & Dismantling</span>
                    <span>${metrics.riggingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-spi-muted">Crating & Prep</span>
                    <span>${metrics.cratingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-spi-muted">Estimated Freight</span>
                    <span>${metrics.shippingCost.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-spi-border flex justify-between font-bold text-sm text-spi-red">
                    <span>Total Estimated TCO</span>
                    <span>${metrics.tco.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Logistics Controls */}
              <div className="space-y-3 bg-spi-dark/30 p-3 rounded border border-spi-border/50">
                <h4 className="text-[10px] font-mono text-spi-muted uppercase tracking-widest flex items-center gap-2">
                  <Truck size={12} /> Logistics Planner
                </h4>
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <label className="flex justify-between mb-1 text-spi-muted">
                      Distance (miles) <span>{distance} mi</span>
                    </label>
                    <input 
                      type="range" 
                      min="50" 
                      max="3000" 
                      step="50"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      className="w-full accent-spi-red"
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer text-spi-muted hover:text-white transition-colors">
                    <input 
                      type="checkbox" 
                      checked={riggingRequired}
                      onChange={(e) => setRiggingRequired(e.target.checked)}
                      className="accent-spi-red w-3 h-3"
                    />
                    Include Professional Rigging
                  </label>
                </div>
              </div>

              {/* Engineering Metrics */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono text-spi-muted uppercase tracking-widest border-b border-spi-border pb-1">Engineering Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-spi-dark/50 p-3 rounded border border-spi-border text-center">
                    <div className="text-lg font-bold text-white mb-1">{metrics.systemOEE}%</div>
                    <div className="text-[9px] font-mono text-spi-muted uppercase">Estimated OEE</div>
                  </div>
                  <div className="bg-spi-dark/50 p-3 rounded border border-spi-border text-center">
                    <div className="text-lg font-bold text-white mb-1">{metrics.paybackPeriodMonths}</div>
                    <div className="text-[9px] font-mono text-spi-muted uppercase">Payback (Months)</div>
                  </div>
                </div>
              </div>

              {/* Compatibility Engine */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono text-spi-muted uppercase tracking-widest border-b border-spi-border pb-1 flex justify-between items-center">
                  Compatibility Engine
                  {metrics.issues.length === 0 ? (
                    <CheckCircle2 size={12} className="text-green-500" />
                  ) : (
                    <span className="bg-spi-red/20 text-spi-red px-1.5 py-0.5 rounded text-[9px]">{metrics.issues.length} Issues</span>
                  )}
                </h4>
                
                {metrics.issues.length === 0 ? (
                  <div className="text-xs font-mono text-green-500/80 flex items-center gap-2">
                    Line layout is optimal.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {metrics.issues.map((issue, idx) => (
                      <div key={idx} className="bg-spi-red/10 border border-spi-red/30 p-2 rounded flex items-start gap-2 text-xs font-mono">
                        <AlertTriangle size={14} className="text-spi-red shrink-0 mt-0.5" />
                        <span className="text-spi-text/90 leading-tight">{issue.message}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
