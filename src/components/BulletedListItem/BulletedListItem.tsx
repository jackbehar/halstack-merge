import { DxcBulletedList } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bulleted-list/
 */

export default function BulletedListItem(props: { children: string }) {
  return (<div><DxcBulletedList.Item>{props.children}</DxcBulletedList.Item></div>)
}


