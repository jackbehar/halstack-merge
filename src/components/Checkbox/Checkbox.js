import React from "react";
import PropTypes from "prop-types";
import { DxcCheckbox } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/checkbox/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Checkbox(props) {
  return <div><DxcCheckbox {...props} /></div>;
}


Checkbox.propTypes = {  
  
    /**
   * The value of the checkbox. This prop is required.
   * @uxpinbind onChange 0
   */
    checked: PropTypes.bool,
    /**
     * The label of the checkbox.
     */
    label: PropTypes.string,
   /**
     * The position of the label relative to the checkbox. Options are 'before' (default) or 'after'.
     */
   labelPosition: PropTypes.oneOf(['before', 'after']),
    /**
     * Whether the checkbox is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The name of the checkbox.
     */
    name: PropTypes.string,
    /**
     * The function to be called when the checkbox is checked or unchecked.
     */
    onChange: PropTypes.func,
    /**
     * The color of the checkbox. Options are 'light' (default) or 'dark'.
     */
    theme: PropTypes.oneOf(['light', 'dark']),
    /**
     * The value of the checkbox. This prop is required.
     */
    value: PropTypes.string,
    /**
     * The tabindex of the checkbox.
     */
    tabIndex: PropTypes.number,
    /**
     * The margin of the checkbox. Can be a string or an object containing `top`, `bottom`, `left`, and `right` values.
     */
    margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),

    /**
     * The size of the checkbox. Options are 'small', 'medium' (default) or 'large'.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The ref for the checkbox.
     */
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
 
   
};
