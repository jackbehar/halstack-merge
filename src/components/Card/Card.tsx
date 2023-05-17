import React from "react";
import { DxcCard as DxcCardUXP } from "@dxc-technology/halstack-react";
import CardPropsType from "@dxc-technology/halstack-react/card/types";

export interface MergeCardPropsType extends Omit<CardPropsType, "onClick">{
  onClick?: ()=>(void)
}


export default function DxcCard(props: CardPropsType) {
  return <div><DxcCardUXP
  imageSrc={props.imageSrc} 
  imageBgColor={props.imageBgColor}
  imagePadding={props.imagePadding}
  imagePosition={props.imagePosition}
  linkHref={props.linkHref}
  onClick={undefined}
  imageCover={props.imageCover}
  margin={props.margin}
  tabIndex={props.tabIndex}
  outlined={props.outlined}
>{props.children}</DxcCardUXP></div>;
}