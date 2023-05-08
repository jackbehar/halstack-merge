import { DxcAlert as DxcAlertUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/alert/types";

export default function DxcAlert(props: Props) {
  return <div style={{ display: "grid" }}><DxcAlertUXP {...props} /></div>;
}
