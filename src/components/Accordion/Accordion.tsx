import React from "react";
import { DxcAccordion } from "@dxc-technology/halstack-react";
import AccordionPropsType from "@dxc-technology/halstack-react/accordion/types";


/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */
export default function Accordion(props: AccordionPropsType) {
  return (
    <div style={{display:"grid"}}><DxcAccordion {...props} /></div>
  );
}
