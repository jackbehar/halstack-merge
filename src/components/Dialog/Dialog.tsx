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

  const [isDialogVisible, setDialogVisible] = React.useState(props.open);
  const handleClick = () => {
    setDialogVisible(!isDialogVisible);
    console.log(isDialogVisible)
  };

  return (
    props.open && (
      <DxcDialog onCloseClick={handleClick} {...props}/>
    )
  );
}
