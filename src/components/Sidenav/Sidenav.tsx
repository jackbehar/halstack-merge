import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import AppLayoutSidenavPropsType from "@dxc-technology/halstack-react/layout/types";

export interface MergeAppLayoutSidenavPropsType extends Omit<AppLayoutSidenavPropsType, "children"> {
  children: React.ReactNode;
}

export default function DxcSidenav(props: MergeAppLayoutSidenavPropsType) {
  return <DxcApplicationLayout.SideNav   {...props} />;
}
