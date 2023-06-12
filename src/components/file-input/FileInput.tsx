import { DxcFileInput as HalstackFileInput } from "@dxc-technology/halstack-react/";
import FileInputPropsType from "@dxc-technology/halstack-react/file-input/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/file-input/
 * @uxpinwrappers SkipContainerWrapper
 */
const DxcFileInput = (props: FileInputPropsType) => (
  <div style={{ display: "grid" }}>
    <HalstackFileInput {...props} />
  </div>
);

export default DxcFileInput;
