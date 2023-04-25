import React from 'react';
import { DxcDialog } from "@dxc-technology/halstack-react";
import DialogPropsType from "@dxc-technology/halstack-react/dialog/types";

export interface MergeDialogPropsType extends DialogPropsType {
  open?: boolean;
  id?: string;
}

const Foo: React.FC<MergeDialogPropsType> = (props: MergeDialogPropsType) => {
  return( <DxcDialog  id="jackDialog"{...props}><p>hello jack</p></DxcDialog>)
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/dialog/
  * @uxpinuseportal
 */
export default function Dialog(props: MergeDialogPropsType) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => {
    setOpen(props.open)
  }, [props.open]);
  
  React.useLayoutEffect(() => {

    if (document.getElementById("jack2")) {
      alert("yes")
      const container = document.getElementById('jack2');
      let dialog = document.querySelector('[role="dialog"]')?.parentElement;
      container!.appendChild(dialog!)
    }

  }, [props]);

  
  return (
  open && (
  <>
    <div id="jack2">foo here</div>
    <DxcDialog {...props}><p>hello jack0!</p></DxcDialog>
    </>
  )
    
    // open && (
    //   Foo
    // )
  )
}
