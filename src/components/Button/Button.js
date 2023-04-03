import React from "react";
import PropTypes from "prop-types";
import { DxcButton } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/button/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Button(props) {
  return <div><DxcButton {...props} /></div>;
}


Button.propTypes = {  /**
* The text to be displayed inside the button.
*/
label: PropTypes.string.isRequired,
/**
* The mode of the button: 'primary', 'secondary', 'text', or 'icon'.
*/
mode: PropTypes.oneOf(['primary', 'secondary', 'text', 'icon']),
/**
* The theme of the button: 'light' or 'dark'.
*/
theme: PropTypes.oneOf(['light', 'dark']),
/**
* Whether the button is disabled.
*/
disabled: PropTypes.bool,
/**
* The URL of the icon to be displayed inside the button. Only used in 'icon' mode.
*/
iconSrc: PropTypes.string,
/**
* The position of the icon relative to the label. Only used in 'icon' mode.
*/
iconPosition: PropTypes.oneOf(['before', 'after']),
/**
* The margin of the button. Can be a string or an object containing `top`, `bottom`, `left`, and `right` values.
*/
margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),

/**
* The function to be called when the button is clicked.
*/
onClick: PropTypes.func,
/**
* The size of the button: 'small', 'medium', or 'large'.
*/
size: PropTypes.oneOf(['small', 'medium', 'large']),
/**
* The tabindex of the button.
*/
tabIndex: PropTypes.number,
/**
* The type of the button: 'button', 'reset', or 'submit'.
*/
type: PropTypes.oneOf(['button', 'reset', 'submit']),
/**
* The value of the button. Only used when the type is 'submit'.
*/
value: PropTypes.string,
};
