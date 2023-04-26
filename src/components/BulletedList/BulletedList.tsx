import React from "react";
import { DxcBulletedList } from "@dxc-technology/halstack-react";
import BulletedListPropsType from "@dxc-technology/halstack-react/bulleted-list/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bulleted-list/
 */

export default function BulletedList(props: BulletedListPropsType) {
  return (
  <DxcBulletedList {...props}>
   {props.children}
  </DxcBulletedList>
  )
}