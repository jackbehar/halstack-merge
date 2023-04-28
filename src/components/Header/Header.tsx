import * as React from "react";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import HeaderPropsType from "@dxc-technology/halstack-react/header/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export interface MergeHeaderPropsType extends Omit<HeaderPropsType, "content">{
  children: React.ReactNode;

}
/**
 * Clone DxcApplicationLayout.Header so that we can append a children prop, to be used as content
 */
export default function Header(props: MergeHeaderPropsType) {
  return (
    React.cloneElement(<DxcApplicationLayout.Header content={props.children}/>, props, null)  )
}

  

