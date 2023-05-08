import React from "react";
import { DxcBulletedList as DxcBulletedListUXP } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bulleted-list/
 */

export default function DxcBulletedListItem(props: { children: React.ReactNode }) {
  return (<div><DxcBulletedListUXP.Item>{props.children}</DxcBulletedListUXP.Item></div>)
}


