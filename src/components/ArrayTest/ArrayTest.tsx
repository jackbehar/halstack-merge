import React from 'react';




const people: { label: string; value: string; }[] = [
  {
    label: '27',
    value: 'Tim'
  },
  {
    label: '237',
    value: 'Teeim'
  },
]

interface MyComponentProps {
  items: Array<typeof people>;
}

const ArrayTest: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div>
     {JSON.stringify(items)}
    </div>
  );
};

export default ArrayTest;
