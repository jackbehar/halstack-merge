import React from "react";
import { DxcBulletedList as DxcBulletedListUXP } from "@dxc-technology/halstack-react";
import BulletedListPropsType from "@dxc-technology/halstack-react/bulleted-list/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bulleted-list/
 */

export default function DxcBulletedList(props: BulletedListPropsType) {
  return (
  <DxcBulletedListUXP {...props}>
   {props.children}
  </DxcBulletedListUXP>
  )
}