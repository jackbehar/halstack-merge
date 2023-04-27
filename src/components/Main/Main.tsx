import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/header/
 */

export default function Main(props: {children:React.ReactNode}) {
  return <div><DxcApplicationLayout.Main {...props}>{props.children}</DxcApplicationLayout.Main></div>;
}
