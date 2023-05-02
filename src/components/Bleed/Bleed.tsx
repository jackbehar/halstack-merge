import { DxcBleed } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/bleed/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bleed/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Bleed = (props:Props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBleed {...props} />
    </div>
  );
};

export default Bleed;
