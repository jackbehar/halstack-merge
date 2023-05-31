import React from 'react';

interface MyComponentProps {
  items: Array<object>;
}

const ArrayTest = (props: MyComponentProps) => (
  <div>
    {JSON.stringify(props.items)}
  </div>
);


export default ArrayTest;
