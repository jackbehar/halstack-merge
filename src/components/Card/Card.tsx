import React from "react";
import { DxcCard } from "@dxc-technology/halstack-react";
import CardPropsType from "@dxc-technology/halstack-react/card/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/card/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Card(props: CardPropsType) {
  return <div><DxcCard {...props} /></div>;
}