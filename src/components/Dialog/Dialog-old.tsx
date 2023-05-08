import React from 'react';
import { DxcDialog as DxcDialogUXP } from "@dxc-technology/halstack-react";
import DialogPropsType from "@dxc-technology/halstack-react/dialog/types";

export interface MergeDialogPropsType extends DialogPropsType {
  /**
   * The visibility of the dialog.
   * @uxpinbind onCloseClick 0
   */
  open?: boolean;
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/dialog/
* @uxpinuseportal
 */
export default function DxcDialog(props: MergeDialogPropsType) {
  // const [open, setOpen] = React.useState(props.open);


  //  React.useEffect(() => {
  //     alert("wirthout prop")
  //   }, []);


  React.useEffect(() => {
    // setOpen(props.open)   

    if (document.getElementById("dialogContainer")) {
      // alert("container found")
      const container = document.getElementById('dialogContainer');
      let dialog = document.querySelector('[role="dialog"]')?.parentElement;
      container!.appendChild(dialog!)
    }
  }, [props.open]);



  // React.useLayoutEffect(() => {

  //   if (document.getElementById("dialogContainer")) {
  //     // alert("yes")
  //     const container = document.getElementById('dialogContainer');
  //     let dialog = document.querySelector('[role="dialog"]')?.parentElement;
  //     container!.appendChild(dialog!)
  //   }

  // }, [props]);


  return (
    props.open && (

      <div id="dialogContainer" style={{ minWidth: "768px", minHeight: "600px" }}> {/* DIALOG WILL MOUNT IN THIS DIV */}

        <DxcDialogUXP {...props}>{props.children}</DxcDialogUXP>

      </div>


    )
  )
}
