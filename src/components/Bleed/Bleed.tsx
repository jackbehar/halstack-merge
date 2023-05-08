import { DxcBleed as DxcBleedUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/bleed/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bleed/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const DxcBleed = (props:Props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBleedUXP {...props} />
    </div>
  );
};

export default DxcBleed;
