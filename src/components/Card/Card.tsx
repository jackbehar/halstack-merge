import React from "react";
import { DxcCard as DxcCardUXP } from "@dxc-technology/halstack-react";
import CardPropsType from "@dxc-technology/halstack-react/card/types";

export interface MergeCardPropsType extends Omit<CardPropsType, "onClick">{
  // onClick: ()=>null
}


export default function DxcCard(props: MergeCardPropsType) {
  return <div><DxcCardUXP {...props} /></div>;
}