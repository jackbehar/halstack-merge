import React from "react";
import PropTypes from "prop-types";
import { DxcBleed } from "@dxc-technology/halstack-react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bleed/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Bleed = (props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBleed {...props} />
    </div>
  );
};

Bleed.propTypes = {
  /**
   Applies the spacing scale to all sides.
   */
  space: PropTypes.oneOf([
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

export default Bleed;
