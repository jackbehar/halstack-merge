import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import AppLayoutSidenavPropsType from "@dxc-technology/halstack-react/layout/types";

export default function Sidenav(props: AppLayoutSidenavPropsType) {
  return <DxcApplicationLayout.SideNav   {...props} />;
}
