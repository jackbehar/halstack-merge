import { DxcRadioGroup as HalstackRadioGroup } from "@dxc-technology/halstack-react";
import RadioGroupPropsType from "@dxc-technology/halstack-react/radio-group/types";

export interface MergeRadioGroupPropsType extends Omit<RadioGroupPropsType, 'defaultValue'> {
  /**
   * Number of the current selected value.
   * @uxpinbind onChange 0
   */
  value?: string;
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/radio-group/
 * @uxpinwrappers SkipContainerWrapper
 */
const DxcRadioGroup = (props: MergeRadioGroupPropsType) => (

  <div style={{ display: "grid" }} key={Math.random()} >
    <HalstackRadioGroup {...props} />
  </div>
)

export default DxcRadioGroup;
