import { DxcFlex as DxcFlexUXP } from "@dxc-technology/halstack-react/";
import Props from "@dxc-technology/halstack-react/flex/types";


const DxcFlex = (props: Props) => {
  return <DxcFlexUXP {...props}>{props.children}</DxcFlexUXP>;
};

export default DxcFlex;
