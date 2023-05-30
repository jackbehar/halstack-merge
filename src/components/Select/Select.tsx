import React from 'react';
import { DxcSelect as DxcSelectUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/select/types";

// export interface MergeSelectPropsType extends Omit<SingleSelect, "defaultValue">{
//    /**
//    * @uxpinbind onChange 0
//    */
//    defaultValue?: string[];
// }
interface SingleSelect  {
  /**
   * If true, the select component will support multiple selected options.
   * In that case, value will be an array of strings with each selected
   * option value.
   */
  multiple?: false;
  /**
   * Initial value of the select, only when it is uncontrolled.
   */
  defaultValue?: string;
  /**
   * Value of the select. If undefined, the component will be uncontrolled
   * and the value will be managed internally by the component.
   */
  value?: string;
  /**
   * This function will be called when the user selects an option.
   * An object including the current value and the error (if the value entered is not valid)
   * will be passed to this function. If there is no error, error will not be defined.
   */
  onChange?: (val: {
      value: string;
      error?: string;
  }) => void;
  /**
   * This function will be called when the select loses the focus. An
   * object including the value and the error (if the value
   * selected is not valid) will be passed to this function. If there is no error,
   * error will not be defined.
   */
  onBlur?: (val: {
      value: string;
      error?: string;
  }) => void;
};
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const options = [
  { label: "Madrid", value: "madrid" },
  { label: "Melbourne", value: "melbourne" },
  { label: "London", value: "london" },
  { label: "Roma", value: "roma" },
];

export interface MergeSingleSelect extends SingleSelect {

}


export default function DxcSelect(props: MergeSingleSelect) {
  
  const [theDefaultvalue, setDefaultvalue] = React.useState(props.defaultValue)

  React.useEffect(() => {
    setDefaultvalue(props.defaultValue)
  },[props.defaultValue]);

  
  return (
    <>
    <div style={{ display: "grid" }}>
      {theDefaultvalue}
      <DxcSelectUXP options={options} defaultValue={theDefaultvalue} {...props} />
    </div>
    </>
  );
}

