import { DxcFlex } from "@dxc-technology/halstack-react/";
import Props from "@dxc-technology/halstack-react/flex/types";


const Flex = (props: Props) => {
  return <DxcFlex {...props}>{props.children}</DxcFlex>;
};

export default Flex;
