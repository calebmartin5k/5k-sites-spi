import { create } from 'zustand';
import {
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';

export type EquipmentCategory = 'filler' | 'capper' | 'sealer' | 'labeler' | 'conveyor' | 'accumulator';

export type EquipmentData = Record<string, unknown> & {
  id: string;
  name: string;
  category: EquipmentCategory;
  price: number;
  voltage: string;
  throughput_ppm: number;
  weight_lbs: number;
  conveyor_height_in: number;
  availability: number; // For OEE
};

export type EquipmentNode = Node<EquipmentData & { label?: string }>;

export const INVENTORY: EquipmentData[] = [
  { id: 'eq-1', name: 'Liquid Filler 60', category: 'filler', price: 45000, voltage: '230V', throughput_ppm: 60, weight_lbs: 1200, conveyor_height_in: 36, availability: 0.95 },
  { id: 'eq-2', name: 'Ron Unger Capper', category: 'capper', price: 32000, voltage: '230V', throughput_ppm: 60, weight_lbs: 850, conveyor_height_in: 36, availability: 0.92 },
  { id: 'eq-3', name: 'Compact Sealer 30', category: 'sealer', price: 15000, voltage: '460V', throughput_ppm: 30, weight_lbs: 500, conveyor_height_in: 34, availability: 0.88 },
  { id: 'eq-4', name: 'World Pkg Accumulation Table', category: 'accumulator', price: 8500, voltage: '110V', throughput_ppm: 100, weight_lbs: 400, conveyor_height_in: 36, availability: 0.99 },
  { id: 'eq-5', name: 'High-Speed Labeler', category: 'labeler', price: 28000, voltage: '230V', throughput_ppm: 80, weight_lbs: 600, conveyor_height_in: 36, availability: 0.96 },
  { id: 'eq-6', name: 'High-Speed Filler 120', category: 'filler', price: 85000, voltage: '460V', throughput_ppm: 120, weight_lbs: 2200, conveyor_height_in: 36, availability: 0.97 },
  { id: 'eq-7', name: 'Inline Capper 120', category: 'capper', price: 45000, voltage: '460V', throughput_ppm: 120, weight_lbs: 1100, conveyor_height_in: 36, availability: 0.94 },
  { id: 'eq-8', name: 'Induction Sealer 120', category: 'sealer', price: 22000, voltage: '230V', throughput_ppm: 120, weight_lbs: 300, conveyor_height_in: 36, availability: 0.98 },
  { id: 'eq-9', name: 'Sanitary Conveyor 10ft', category: 'conveyor', price: 4500, voltage: '110V', throughput_ppm: 150, weight_lbs: 250, conveyor_height_in: 36, availability: 0.99 },
  { id: 'eq-10', name: 'Sanitary Conveyor 20ft', category: 'conveyor', price: 8000, voltage: '110V', throughput_ppm: 150, weight_lbs: 450, conveyor_height_in: 36, availability: 0.99 },
];

export interface CompatibilityIssue {
  type: 'bottleneck' | 'voltage' | 'height';
  message: string;
  sourceId: string;
  targetId: string;
}

interface IPLAState {
  nodes: EquipmentNode[];
  edges: Edge[];
  shippingDistanceMiles: number;
  riggingRequired: boolean;
  onNodesChange: OnNodesChange<EquipmentNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: EquipmentNode) => void;
  setShippingDistance: (miles: number) => void;
  setRiggingRequired: (req: boolean) => void;
  clearAll: () => void;
}

export const useIPLAStore = create<IPLAState>((set, get) => ({
  nodes: [],
  edges: [],
  shippingDistanceMiles: 500,
  riggingRequired: true,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes) as EquipmentNode[],
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  addNode: (node) => {
    set({ nodes: [...get().nodes, node] });
  },
  setShippingDistance: (miles) => set({ shippingDistanceMiles: miles }),
  setRiggingRequired: (req) => set({ riggingRequired: req }),
  clearAll: () => set({ nodes: [], edges: [] }),
}));
