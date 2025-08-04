import React, { memo, ChangeEvent } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ColorSelectorNodeData {
  color: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface ColorSelectorNodeProps {
  data: ColorSelectorNodeData;
  isConnectable: boolean;
}

const ColorSelectorNode: React.FC<ColorSelectorNodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default memo(ColorSelectorNode);
