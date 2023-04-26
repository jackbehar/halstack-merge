import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import React from "react";

type SVG = React.ReactNode & React.SVGProps<SVGSVGElement>;

type SidenavLinkPropsType = {
  /**
   * Value of the tabindex.
   */
  tabIndex?: number;
  /**
   * Page to be opened when the user clicks on the link.
   */
  href?: string;
  /**
   * If true, the page is opened in a new browser tab.
   */
  newWindow?: boolean;
  /**
   * Element or path used as the icon that will be placed to the left of the link text.
   */
  icon?: string | SVG;
  /**
   * If true, the link will be marked as selected. This can also affect the group if it is closed to indicate that one of its links is selected.
   */
  selected?: boolean;
  /**
   * The area inside the sidenav link.
   */
  children: string;
  /**
   * This function will be called when the user clicks the link.
   */
  onClick?: ($event: any) => void;
};

export default function SidenavLink(props: SidenavLinkPropsType) {
  return <DxcApplicationLayout.SideNav.Link {...props} />;
}
