import * as React from "react";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/#children-dxcheader.dropdown
 */
export interface MergeHeaderDropdownType {
  children: React.ReactNode;
  label: string;
  options: object;
  /**
   * The visibility of the dialog.
   * @uxpinbind onSelectOption 0
   */
  value: string | number;
  onSelectOption:()=>void
}
/**
 * Clone DxcApplicationLayout.Header so that we can append a children prop, to be used as content
 */
export default function DxcHeaderDropdown(props: MergeHeaderDropdownType) {
  return (
    <DxcApplicationLayout.Header.Dropdown {...props}/>
  )
}

  

