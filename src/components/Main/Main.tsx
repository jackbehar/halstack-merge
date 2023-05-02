import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

export interface MergeAppLayoutMainPropsType {
  children: React.ReactNode;
}
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export default function Main(props:MergeAppLayoutMainPropsType) {
  return <div><DxcApplicationLayout.Main {...props}>{props.children}</DxcApplicationLayout.Main></div>;
}
