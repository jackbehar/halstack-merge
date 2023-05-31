import React from 'react';

interface MyComponentProps {
    value: 'Teeim'
  items: Array<object>;
}

const ArrayTest: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div>
     {JSON.stringify(items)}
    </div>
  );
};

export default ArrayTest;
