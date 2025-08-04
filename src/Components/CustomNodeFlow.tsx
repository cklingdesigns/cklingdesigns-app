import React, { useState, useEffect } from 'react';
import {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ColorSelectorNode from './ColorSelectorNode.js'; // Replace with your actual custom node component

const initBgColor = '#c9f1dd';

const snapGrid: [number, number] = [20, 20];

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState<string>(initBgColor);

  useEffect(() => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') return node;

          const color = event.target.value;
          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 0, y: 50 },
        sourcePosition: Position.Right,
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange, color: initBgColor },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: Position.Left,
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: Position.Left,
      },
    ]);

    setEdges([
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e2a-3', source: '2', target: '3', animated: true },
      { id: 'e2b-4', source: '2', target: '4', animated: true },
    ]);
  }, []);

  return (
    <div style={{ height: 400 }}>
      {/* Add your ReactFlow component here and pass nodes, edges, etc. */}
    </div>
  );
};

export default CustomNodeFlow;
