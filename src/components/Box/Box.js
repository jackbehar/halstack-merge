import React from "react";
import PropTypes from "prop-types";
import { DxcBox } from "@dxc-technology/halstack-react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Box = (props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBox {...props} />
    </div>
  );
};

Box.propTypes = {
  /**
  The size of the shadow to be displayed around the box.
   */
  shadowDepth: PropTypes.oneOf([0, 1, 2]),

  /**
  Size of the component
  */
  
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "fitContent",
    "fillParent",
  ]),
  
  /**
   * The margin of the checkbox. Can be a string or an object containing `top`, `bottom`, `left`, and `right` values.
   */
  margin: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),

  /**
   * The padding of the checkbox. Can be a string or an object containing `top`, `bottom`, `left`, and `right` values.
   */
  padding: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge", 
    "xxlarge",
  ]),
  
  /**
  Changes the display CSS property of the box div.
   */
  display: PropTypes.string,
  
  /**
  Custom content that will be placed in the box component.
   */
  children: PropTypes.node,
};

export default Box;
