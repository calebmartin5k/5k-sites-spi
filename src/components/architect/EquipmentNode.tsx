import { Handle, Position } from '@xyflow/react';
import { Settings2, Zap, ArrowRight, ArrowDown } from 'lucide-react';
import { EquipmentData } from './store';
import { motion } from 'motion/react';

export default function EquipmentNode({ data }: { data: EquipmentData }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-spi-surface border border-spi-border rounded-lg shadow-xl w-64 text-spi-text relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-spi-red to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-3 border-b border-spi-border bg-spi-dark/50 flex justify-between items-center">
        <span className="font-mono text-[10px] text-spi-red uppercase tracking-widest">{data.category}</span>
        <Settings2 size={14} className="text-spi-muted" />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-sm mb-3 uppercase tracking-tight">{data.name}</h3>
        
        <div className="space-y-2 text-xs font-mono text-spi-muted">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1"><Zap size={12}/> Power</span>
            <span className="text-white">{data.voltage}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1"><ArrowRight size={12}/> Speed</span>
            <span className="text-white">{data.throughput_ppm} ppm</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1"><ArrowDown size={12}/> Height</span>
            <span className="text-white">{data.conveyor_height_in}"</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 border-t border-spi-border bg-spi-dark/30 flex justify-between items-center">
        <span className="text-xs font-mono text-spi-muted">Price</span>
        <span className="text-sm font-bold text-spi-red">${data.price.toLocaleString()}</span>
      </div>

      <Handle 
        type="target" 
        position={Position.Left} 
        className="w-3 h-3 bg-spi-dark border-2 border-spi-border rounded-full hover:border-spi-red hover:bg-spi-red transition-colors"
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3 h-3 bg-spi-dark border-2 border-spi-border rounded-full hover:border-spi-red hover:bg-spi-red transition-colors"
      />
    </motion.div>
  );
}
