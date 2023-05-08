import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import FooterPropsType from "@dxc-technology/halstack-react/footer/types";

export default function DxcFooter(props: FooterPropsType) {
  return <div><DxcApplicationLayout.Footer   {...props} /></div>
}
