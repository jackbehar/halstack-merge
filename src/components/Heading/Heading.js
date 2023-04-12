import React from "react";
import PropTypes from "prop-types";
import { DxcHeading } from "@dxc-technology/halstack-react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/Heading/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Heading = (props) => {
  return (
   <div style={{display:"grid"}}><DxcHeading {...props} /></div>
  );
};

Heading.propTypes = {
  /**
   * Defines the heading level from 1 to 5. The styles of the heading are applied according to the level. The html tag of the heading will be the one specified in the 'as' prop. If 'as' is not specified, the html tag of the heading is the one specified in the 'level' prop.
   */
  level: PropTypes.number,
    /**
   Heading text.
   */
    text: PropTypes.string,
    /**
   Specifies the html tag of the heading.
   */
    as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),

  /**
Modifies the default weight of the heading.
   */
  weight: PropTypes.oneOf(["light", "normal", "bold"]),
  
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"]),

};

// export default createWrapper(ChipWrapper);
export default Heading;
