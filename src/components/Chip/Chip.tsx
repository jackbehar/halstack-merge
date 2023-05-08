import { DxcChip as DxcChipUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/chip/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/chip/
 */
const DxcChip = (props: Props) => {
  return (
   <div><DxcChipUXP {...props} /></div>
  );
};

export default DxcChip;
