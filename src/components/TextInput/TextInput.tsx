import { DxcTextInput as DxcTextInputUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/text-input/types";

// type TextInputPropsType = React.ComponentProps<typeof DxcTextInputUXP>;

export interface MergeInputPropsType extends React.ComponentProps<typeof DxcTextInputUXP>{
  onClick?: ()=>(void)
}



/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function DxcTextInput(props:MergeInputPropsType) {
  return (
    <div style={{ display: "grid" }}>
      <DxcTextInputUXP {...props} />
    </div>
  );
}