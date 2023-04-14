import { DxcButton } from "@dxc-technology/halstack-react";
import ButtonPropsType from "@dxc-technology/halstack-react/button/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/button/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Button(props: ButtonPropsType) {
  return <div><DxcButton {...props} /></div>;
}
