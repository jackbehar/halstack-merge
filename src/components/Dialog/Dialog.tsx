import { DxcDialog } from "@dxc-technology/halstack-react";
import DialogPropsType from "@dxc-technology/halstack-react/dialog/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/dialog/
 * @uxpinuseportal
 */
export default function Dialog(props: DialogPropsType) {
  return (
      <DxcDialog {...props}/>
  );
}
