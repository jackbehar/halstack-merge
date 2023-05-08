import * as React from "react";
import { DxcDropdown as DxcDropdownUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/dropdown/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/#children-dxcheader.dropdown
 */
export default function DxcDropdown(props: Props) {
  return (
    <DxcDropdownUXP {...props}/>
  )
}

  

