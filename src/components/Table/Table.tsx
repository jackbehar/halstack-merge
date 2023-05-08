import { DxcTable as DxcTableUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/table/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/chip/
 */
const DxcTable = (props: Props) => {
  return (
   <div style={{display:"grid"}}><DxcTableUXP {...props} /></div>
  );
};

export default DxcTable;
