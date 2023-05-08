import { DxcApplicationLayout as DxcApplicationLayoutUXP } from "@dxc-technology/halstack-react";

export interface MergeAppLayoutMainPropsType {
  children: React.ReactNode;
}
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export default function DxcMain(props:MergeAppLayoutMainPropsType) {
  return <div><DxcApplicationLayoutUXP.Main {...props}>{props.children}</DxcApplicationLayoutUXP.Main></div>;
}
