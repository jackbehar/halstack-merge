import { DxcCheckbox } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/checkbox/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/checkbox/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Checkbox(props: Props) {
  return <div><DxcCheckbox {...props} /></div>;
}


