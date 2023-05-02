import { DxcTextInput } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/text-input/types";


/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function TextInput(props:Props) {
  return (
    <div style={{ display: "grid" }}>
      <DxcTextInput {...props} />
    </div>
  );
}