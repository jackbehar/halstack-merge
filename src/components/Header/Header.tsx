import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import HeaderPropsType from "@dxc-technology/halstack-react/header/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export default function Header(props: HeaderPropsType) {
  return <DxcApplicationLayout.Header {...props}></DxcApplicationLayout.Header>;
}
