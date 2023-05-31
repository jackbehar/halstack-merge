import React from 'react';

interface MyComponentProps {
  items: Array<{ label: string; value: number; }>;
}





const ArrayTest: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div>
     {JSON.stringify(items)}
    </div>
  );
};

export default ArrayTest;
