"use client";

import { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  Panel,
  ReactFlowProvider,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useIPLAStore, EquipmentData, EquipmentNode } from './store';
import EquipmentNodeComponent from './EquipmentNode';
import Sidebar from './Sidebar';
import MetricsPanel from './MetricsPanel';
import { Trash2 } from 'lucide-react';

const nodeTypes = {
  equipment: EquipmentNodeComponent,
};

function IPLAContent() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  
  const nodes = useIPLAStore((state) => state.nodes);
  const edges = useIPLAStore((state) => state.edges);
  const onNodesChange = useIPLAStore((state) => state.onNodesChange);
  const onEdgesChange = useIPLAStore((state) => state.onEdgesChange);
  const onConnect = useIPLAStore((state) => state.onConnect);
  const addNode = useIPLAStore((state) => state.addNode);
  const clearAll = useIPLAStore((state) => state.clearAll);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const rawData = event.dataTransfer.getData('application/reactflow');
      
      if (!rawData || !reactFlowBounds || !reactFlowInstance) return;

      const equipment: EquipmentData = JSON.parse(rawData);

      // Calculate position
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: EquipmentNode = {
        id: `${equipment.id}-${Date.now()}`,
        type: 'equipment',
        position,
        data: equipment,
      };

      addNode(newNode);
    },
    [reactFlowInstance, addNode]
  );

  return (
    <div className="flex h-[calc(100vh-80px)] w-full bg-spi-dark overflow-hidden font-sans text-spi-text pt-20">
      <Sidebar />
      <div className="flex-1 relative" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
          className="bg-spi-dark"
          minZoom={0.2}
        >
          <Background 
            variant={BackgroundVariant.Dots} 
            gap={40} 
            size={1} 
            color="#262626" 
          />
          <Controls className="bg-spi-surface border-spi-border fill-spi-text" />
          
          <Panel position="top-left" className="m-6 bg-spi-surface/90 backdrop-blur-md p-6 border border-spi-border max-w-sm pointer-events-auto">
            <h1 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white">
              Line Architect Demo
            </h1>
            <p className="text-xs font-mono text-spi-muted mb-4 leading-relaxed">
              Drag equipment from the inventory onto the canvas. Connect the nodes to see real-time error checking.
            </p>
            <div className="bg-spi-dark border border-spi-border p-3 text-xs mb-4">
              <strong className="text-spi-red uppercase tracking-widest block mb-1">Try this Demo:</strong>
              <ol className="list-decimal pl-4 space-y-1 text-spi-muted">
                <li>Drag the <span className="text-white">High-Speed Filler 120</span> onto the canvas.</li>
                <li>Drag the <span className="text-white">Ron Unger Capper</span> next to it.</li>
                <li>Connect the dots between them.</li>
                <li>Watch the error system catch the <strong>throughput bottleneck</strong> automatically!</li>
              </ol>
            </div>
            {nodes.length > 0 && (
              <button 
                onClick={clearAll}
                className="flex items-center justify-center w-full gap-2 text-xs font-bold uppercase tracking-wider text-spi-red hover:text-white transition-colors px-4 py-3 border border-spi-red hover:bg-spi-red bg-spi-red/10"
              >
                <Trash2 size={14} /> Clear Workspace
              </button>
            )}
          </Panel>
          
          <MetricsPanel />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function ProductionLineArchitect() {
  return (
    <ReactFlowProvider>
      <IPLAContent />
    </ReactFlowProvider>
  );
}
