import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import React, { ReactNode } from "react";

type SidenavSectionPropsType = {
  /**
   * The area inside the sidenav section. This area can be used to render sidenav groups, links and custom content.
   */
  children: ReactNode;
};

export default function SidenavSection({ children }: SidenavSectionPropsType) {
  return (
    <DxcApplicationLayout.SideNav.Section>
      {children}
    </DxcApplicationLayout.SideNav.Section>
  );
}
