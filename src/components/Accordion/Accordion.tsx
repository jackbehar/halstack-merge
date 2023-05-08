import React from "react";
import { DxcAccordion as DxcAccordionUXP } from "@dxc-technology/halstack-react";
import AccordionPropsType from "@dxc-technology/halstack-react/accordion/types";


/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function DxcAccordion(props: AccordionPropsType) {
  return (
    <div style={{display:"grid"}}><DxcAccordionUXP {...props} /></div>
  );
}
