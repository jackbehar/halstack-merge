import PropTypes from 'prop-types';
import React from 'react';
import { DxcGrid as DxcGridUXP } from "@dxc-technology/halstack-react/";
import GridItem from './GridItem/GridItem';
import Props from "@dxc-technology/halstack-react/grid/types";

export default function DxcGrid(props:Props) {
  return (
    <DxcGridUXP {...props}>
      {props.children}
    </DxcGridUXP>
  );
}


DxcGrid.GridItem = GridItem;


