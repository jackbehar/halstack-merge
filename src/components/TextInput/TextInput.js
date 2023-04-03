import React from "react";
import PropTypes from "prop-types";
import { DxcTextInput } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */

export default function TextInput(props) {
  return <div style={{display: 'grid'}}><DxcTextInput {...props} /></div>;
}


TextInput.propTypes = {   /**
* The value of the text input. This prop is required.
* @uxpinbind onChange 0
*/
value: PropTypes.string,
/**
* The label of the text input.
*/
label: PropTypes.string,
/**
* The placeholder of the text input.
*/
placeholder: PropTypes.string,
/**
* Whether the text input is disabled.
*/
disabled: PropTypes.bool,
/**
* Whether the text input is read only.
*/
readOnly: PropTypes.bool,
/**
* The function to be called when the text input value changes.
*/
onChange: PropTypes.func,
/**
* The function to be called when the text input loses focus.
*/
onBlur: PropTypes.func,
/**
* The function to be called when the text input receives focus.
*/
onFocus: PropTypes.func,
/**
* The color of the text input. Options are 'light' (default) or 'dark'.
*/
theme: PropTypes.oneOf(['light', 'dark']),
/**
* The size of the text input. Options are 'small', 'medium' (default) or 'large'.
*/
size: PropTypes.oneOf(['small', 'medium', 'large']),
/**
* The icon to be displayed in the text input.
*/
icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
/**
* The position of the icon relative to the text input. Options are 'before' (default) or 'after'.
*/
iconPosition: PropTypes.oneOf(['before', 'after']),
/**
* The margin of the text input. Can be a string or an object containing `top`, `bottom`, `left`, and `right` values.
*/
margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", , "xxlarge"]),
/**
* Whether the text input is optional.
*/
optional: PropTypes.bool,
/**
* The ref for the text input.
*/
ref: PropTypes.oneOfType([
 PropTypes.func,
 PropTypes.shape({ current: PropTypes.any }),
]),
};