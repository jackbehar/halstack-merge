import React from "react";
import PropTypes from "prop-types";
import { DxcFlex } from "@dxc-technology/halstack-react/";

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Flex = (props) => {
  return <DxcFlex {...props}>{props.children}</DxcFlex>;
};

Flex.propTypes = {
  alignContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
    "stretch",
  ]),
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
  ]),

  direction: PropTypes.oneOf(["row", "column", "row-responsive"]),

  gap: PropTypes.number,

  grow: PropTypes.number,

  shrink: PropTypes.number,

  order: PropTypes.number,

  basis: PropTypes.number,

  margin: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),

};

export default Flex;
