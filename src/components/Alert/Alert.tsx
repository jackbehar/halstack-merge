import { DxcAlert } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/alert/types";

export default function Alert(props: Props) {
  return <div style={{ display: "grid" }}><DxcAlert {...props} /></div>;
}
