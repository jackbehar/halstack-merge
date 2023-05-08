import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import React, { ReactNode } from "react";

type SidenavTitlePropsType = {
  /**
   * The area inside the sidenav title. This area can be used to render custom content.
   */
  children: ReactNode;
};

export default function DxcSidenavTitle({
  children = "Title",
}: SidenavTitlePropsType) {
  return (
    <DxcApplicationLayout.SideNav.Title>
      {children}
    </DxcApplicationLayout.SideNav.Title>
  );
}
