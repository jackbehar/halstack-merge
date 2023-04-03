import React from "react";
import PropTypes from "prop-types";
import { DxcFlex } from "@dxc-technology/halstack-react/";


const Flex = (props) => {
  return <DxcFlex {...props}>{props.children}</DxcFlex>;
};

Flex.propTypes = {
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "start",
    "end",
    "left",
    "right",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "start",
    "end",
    "self-start",
    "self-end",
    "center",
    "baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "normal",
    "flex-start",
    "flex-end",
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch"
  ]),
  alignSelf: PropTypes.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  gap: PropTypes.oneOfType([
    PropTypes.shape({
      rowGap: PropTypes.string,
      columnGap: PropTypes.string,
    })
  ]),
  order: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node,
};

export default Flex;
