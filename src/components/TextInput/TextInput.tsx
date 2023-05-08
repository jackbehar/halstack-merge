import { DxcTextInput as DxcTextInputUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/text-input/types";


/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function DxcTextInput(props:Props) {
  return (
    <div style={{ display: "grid" }}>
      <DxcTextInputUXP {...props} />
    </div>
  );
}