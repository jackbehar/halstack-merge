import { DxcChip } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/chip/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/chip/
 */
const Chip = (props: Props) => {
  return (
   <div><DxcChip {...props} /></div>
  );
};

export default Chip;
