import React from 'react';

interface MyComponentProps {
  items: string[];
}

const ArrayTest: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default ArrayTest;
