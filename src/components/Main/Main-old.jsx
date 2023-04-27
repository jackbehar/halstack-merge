import React from "react";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import PropTypes from "prop-types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export default function Main(props) {
  return <div><DxcApplicationLayout.Main {...props}>{props.children}</DxcApplicationLayout.Main></div>;
}

Main.propTypes = {  
  children:PropTypes.node,
  name: PropTypes.string
}


