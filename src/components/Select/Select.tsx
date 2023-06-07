import { DxcSelect as HalstackSelect } from "@dxc-technology/halstack-react";
import SelectPropsType from "@dxc-technology/halstack-react/select/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/select/
 * @uxpinwrappers SkipContainerWrapper
 */
const DxcSelect = (props: SelectPropsType) => (
    <HalstackSelect {...props} key={Math.random()}/>
);

export default DxcSelect;
