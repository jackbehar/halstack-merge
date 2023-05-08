import React from "react";
import { DxcCard as DxcCardUXP } from "@dxc-technology/halstack-react";
import CardPropsType from "@dxc-technology/halstack-react/card/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/card/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function DxcCard(props: CardPropsType) {
  return <div><DxcCardUXP {...props} /></div>;
}