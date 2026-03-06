import { INVENTORY, EquipmentData } from './store';
import { motion } from 'motion/react';
import { PackageSearch, GripVertical } from 'lucide-react';

export default function Sidebar() {
  const handleDragStart = (event: any, equipment: EquipmentData) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(equipment));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-80 h-full bg-spi-surface border-r border-spi-border flex flex-col z-10 relative">
      <div className="p-6 border-b border-spi-border flex items-center gap-3">
        <PackageSearch className="text-spi-red" />
        <h2 className="font-bold text-lg uppercase tracking-tight">Inventory</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {INVENTORY.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onDragStart={(e) => handleDragStart(e, item)}
            draggable
            className="p-4 border border-spi-border bg-spi-dark/50 rounded cursor-grab active:cursor-grabbing hover:border-spi-red/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[2px] h-full bg-spi-red scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
            
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <span className="text-[10px] font-mono text-spi-muted uppercase block mb-1">{item.category}</span>
                <h4 className="font-semibold text-sm leading-tight text-white mb-2">{item.name}</h4>
                <span className="text-xs font-mono text-spi-red font-bold">${item.price.toLocaleString()}</span>
              </div>
              <GripVertical size={16} className="text-spi-border group-hover:text-spi-muted transition-colors flex-shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-4 border-t border-spi-border bg-spi-dark/50 text-xs font-mono text-spi-muted leading-relaxed">
        Drag and drop equipment onto the workspace to build your production line.
      </div>
    </div>
  );
}
