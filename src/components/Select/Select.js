import React from "react";
import PropTypes from "prop-types";
import { DxcSelect } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Select(props) {
  return (
    <div style={{ display: "grid" }}>
      <DxcSelect {...props} />
    </div>
  );
}

Select.propTypes = {
  /**
Initial value of the select, only when it is uncontrolled.
*/
  defaultValue: PropTypes.string,

  /**
   * Value of the select. If undefined, the component will be uncontrolled and the value will be managed internally by the component.
   * @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,

  /**
Text to be placed above the select.
*/
  label: PropTypes.string,
  /*
Name attribute of the input element. This attribute will allow users
to find the component's value during the submit event. In this event,
the component's value will always be a regular string, for both single
and multiple selection modes, been in the first one a single option
value and in the multiple variant more than one option value,
separated by commas.
*/
  name: PropTypes.string,
  /*
An array of objects representing the selectable options.
*/
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
          })
        ).isRequired,
      })
    ),
  ]).isRequired,
  /*
Helper text to be placed above the select.
*/
  helperText: PropTypes.string,
  /*
Text to be put as placeholder of the select.
*/
  placeholder: PropTypes.string,
  /*
If true, the component will be disabled.
*/
  disabled: PropTypes.bool,
  /*
If true, the select will be optional, showing '(Optional)'
next to the label and adding a default first option with an empty string as value,
been the placeholder (if defined) its label. Otherwise, the field will be
considered required and an error will be passed as a parameter to the
OnBlur and onChange functions if an option wasn't selected.
*/
  optional: PropTypes.bool,
  /*
If true, enables search functionality.
*/
  searchable: PropTypes.bool,
  /*
If it is a defined value and also a truthy string, the component will
change its appearance, showing the error below the select component.
If the defined value is an empty string, it will reserve a space below
the component for a future error, but it would not change its look. In
case of being undefined or null, both the appearance and the space for
the error message would not be modified.
*/
  error: PropTypes.string,

  /**
This function will be called when the user selects an option. An object including the new value (or values) and the error (if the value selected is not valid) will be passed to this function. An example of this object is: { value: value, error: error }. If there is no error, error will not be defined.
   */
  onChange: PropTypes.func,
  /**
This function will be called when the select loses the focus. An object including the value (or values) and the error (if the value selected is not valid) will be passed to this function. An example of this object is: { value: value, error: error }. If there is no error, error will not be defined.
 */
  onBlur: PropTypes.func,

  /*
Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
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
   * Size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large", "fillParent"]),
  /**
   * Value of the tabindex attribute.
   */
  tabIndex: PropTypes.number,
    /**
   * Reference to the component.
   */
    ref: PropTypes.object,
};

Select.defaultProps = {
  // label: null,
  // value: "",
  // onBlur: () => {},
  // placeholder: "",
  // margin: "",
  // size: "medium",
  // disabled: false,
  // clearable: false,
};
