import React from 'react';
import { DxcDialog as DxcDialogUXP } from "@dxc-technology/halstack-react";
import DialogPropsType from "@dxc-technology/halstack-react/dialog/types";



/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/dialog/
* @uxpinuseportal
*/
export default function DxcDialog(props: DialogPropsType) {


  React.useEffect(() => {
    // setOpen(props.open)   

    if (document.getElementById("dialogContainer")) {
      const container = document.getElementById('dialogContainer');
      let dialog = document.querySelector('[role="dialog"]')?.parentElement;
      container!.appendChild(dialog!)
    }
  }, [props]);

  return (
    <div id="dialogContainer" style={{ minWidth: "768px", minHeight: "600px" }}> {
    /* DIALOG WILL MOUNT IN THIS DIV */}
        <DxcDialogUXP {...props}>{props.children}</DxcDialogUXP>
    </div>
  )
}
