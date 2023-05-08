import { DxcBox as DxcBoxUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/box/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const DxcBox = (props:Props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBoxUXP {...props} />
    </div>
  );
};

export default DxcBox;
