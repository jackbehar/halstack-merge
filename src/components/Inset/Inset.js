import React from "react";
import PropTypes from "prop-types";
import { DxcInset } from "@dxc-technology/halstack-react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/inset/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Inset = (props) => {
  return (
      <DxcInset {...props} />
  );
};

Inset.propTypes = {
  /**
   Applies the spacing scale to the left and right sides.
   */
  horizontal: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),

  /**
  Applies the spacing scale to the top and bottom sides.
   */
  vertical: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),
  /**
  Applies the spacing scale to the top side.
   */
  top: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),
  /**
  Applies the spacing scale to the bottom side.
   */
  bottom: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),
  /**
Applies the spacing scale to the right side.
   */
  right: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),
  /**
Applies the spacing scale to the left side.
   */
  left: PropTypes.oneOf([
    "0rem",
    "0.125rem",
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
  ]),
  /**
Custom content inside the inset.
   */
  children: PropTypes.node,
};

// export default createWrapper(ChipWrapper);
export default Inset;
