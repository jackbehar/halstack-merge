import { DxcBox } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/box/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Box = (props:Props) => {
  return (
    <div style={{ display: "grid" }}>
      <DxcBox {...props} />
    </div>
  );
};

export default Box;
