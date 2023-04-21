import React from 'react';
import { DxcDialog } from "@dxc-technology/halstack-react";
import DialogPropsType from "@dxc-technology/halstack-react/dialog/types";

export interface MergeDialogPropsType extends DialogPropsType {
  open: boolean;
}
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/dialog/
 * @uxpinuseportal
 */
export default function Dialog(props: MergeDialogPropsType) {
  const [open, setOpen] = React.useState(props.open);
  React.useEffect(() => setOpen(props.open), [props]);
  return (
    open && (
      <DxcDialog {...props} />
    )
  );
}
