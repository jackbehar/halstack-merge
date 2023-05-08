import { DxcInset as DxcInsetUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/inset/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/inset/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const DxcInset = (props: Props) => {
  return (
    <DxcInsetUXP {...props} />
  );
}
export default DxcInset;
