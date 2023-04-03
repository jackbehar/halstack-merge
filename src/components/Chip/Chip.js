import React from "react";
import PropTypes from "prop-types";
import { DxcChip } from "@dxc-technology/halstack-react";

const Chip = (props) => {
  return (
    <DxcChip {...props} />
  );
};

Chip.propTypes = {
  /**
   * Text to be placed on the chip.
   */
  label: PropTypes.string,
  /**
   * Element or path used as icon to be placed after the chip label.
   */
  suffixIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Element or path used as icon to be placed before the chip label.
   */
  prefixIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This function will be called when the suffix is clicked.
   */
  onClickSuffix: PropTypes.func,
  /**
   * This function will be called when the prefix is clicked.
   */
  onClickPrefix: PropTypes.func,
  /**
   * If true, the component will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  margin: PropTypes.oneOf(["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"]),
  /**
   * Value of the tabindex attribute.
   */
  tabIndex: PropTypes.number,
};

// export default createWrapper(ChipWrapper);
export default Chip;
