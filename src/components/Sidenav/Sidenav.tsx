import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import React, { ReactNode } from "react";

type SidenavPropsType = {
  /**
   * The area inside the sidenav. This area can be used to render the content inside the sidenav.
   */
  children: ReactNode;
  /**
   * The area assigned to render the sidenav title. It is highly recommended to use the sidenav title.
   */
  title?: ReactNode;
};

export default function Sidenav(props: SidenavPropsType) {
  return <DxcApplicationLayout.SideNav {...props} />;
}
