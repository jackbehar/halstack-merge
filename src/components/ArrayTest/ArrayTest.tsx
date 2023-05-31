import React from 'react';

interface MyComponentProps {
  items: Array<Array<any>>;
}

const ArrayTest: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div>
     {JSON.stringify(items)}
    </div>
  );
};

export default ArrayTest;
