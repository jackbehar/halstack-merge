import * as React from "react";
import { DxcDropdown } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/dropdown/types";

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
export default function Dropdown(props: Props) {
  return (
    <DxcDropdown {...props}/>
  )
}

  

