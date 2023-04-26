import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import React, { ReactNode } from "react";

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type SidenavGroupPropsType = {
  /**
   * The area inside the sidenav group. This area can be used to render sidenav links.
   */
  children: ReactNode;
  /**
   * The title of the sidenav group.
   */
  title?: string;
  /**
   * If true the sidenav group title will be considered a button and the group will be collapsable.
   */
  collapsable?: boolean;
  /**
   * The icon to be displayed next to the title of the group.
   */
  icon?: string | SVG;
};

export default function SidenavGroup(props: SidenavGroupPropsType) {
  return <DxcApplicationLayout.SideNav.Group {...props} />;
}
