import PropTypes from 'prop-types';
import React from 'react';
import { GridItemProps} from "@dxc-technology/halstack-react/grid/types";
import { DxcGrid as DxcGridUXP } from "@dxc-technology/halstack-react/";

/**
 * @uxpinnamespace DxcGrid
 */
export default function GridItem(props:GridItemProps) {
  return (
    <DxcGridUXP.GridItem {...props}>{props.children}</DxcGridUXP.GridItem>
  );
}

