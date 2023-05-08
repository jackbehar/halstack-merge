import { DxcResultsetTable as DxcResultsetTableUXP } from "@dxc-technology/halstack-react";
import DxcResultsetTablePropsType from "@dxc-technology/halstack-react/resultsetTable/types";


/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/resultset-table/
 */
export default function DxcResultsetTable(props: DxcResultsetTablePropsType) {
  return <DxcResultsetTableUXP {...props} />;
}
