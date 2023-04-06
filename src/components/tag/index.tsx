import React from 'react';

export interface ITag {
  color?: string;
  label: string;
}

const Tag: React.FC<ITag> = ({ color, label }) => {
  return (
    <div className="tag">
      <span
        style={{
          background: color ? color : '',
          borderRadius: '23px',
          padding: '0px 10px',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default Tag;
