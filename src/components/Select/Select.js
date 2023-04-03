import React from "react";
import PropTypes from "prop-types";
import { DxcSelect } from "@dxc-technology/halstack-react";

const Select = ({
  options,
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  margin,
  size,
  disabled,
  clearable,
}) => {
  const handleOnChange = (newValue) => {
    onChange({ target: { name, value: newValue } });
  };

  const handleOnBlur = () => {
    onBlur({ target: { name, value } });
  };

  return (
    <DxcSelect
      options={options}
      label={label}
      name={name}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder={placeholder}
      margin={margin}
      size={size}
      disabled={disabled}
      clearable={clearable}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
    /**
   * The value of the checkbox. This prop is required.
   * @uxpinbind onChange 0
   */
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      top: PropTypes.string,
      bottom: PropTypes.string,
      right: PropTypes.string,
      left: PropTypes.string,
    }),
  ]),
  size: PropTypes.oneOf(["small", "medium", "large", "fillParent"]),
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
};

Select.defaultProps = {
  label: null,
  value: "",
  onBlur: () => {},
  placeholder: "",
  margin: "",
  size: "medium",
  disabled: false,
  clearable: false,
};

export default Select;
