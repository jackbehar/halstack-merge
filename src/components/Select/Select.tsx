import { DxcSelect } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/select/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/text-input/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Select(props: Props) {
  return (
    <div style={{ display: "grid" }}>
      <DxcSelect {...props} />
    </div>
  );
}

