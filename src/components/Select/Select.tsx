import { DxcSelect as HalstackSelect } from "@dxc-technology/halstack-react";
import SelectPropsType from "@dxc-technology/halstack-react/select/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/select/
 * @uxpinwrappers SkipContainerWrapper
 */
const DxcSelect = (props: SelectPropsType) => (
  <div style={{ display: "grid" }}>
    <HalstackSelect {...props} />
  </div>
);

export default DxcSelect;
