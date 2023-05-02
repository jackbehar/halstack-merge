import { DxcHeading } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/heading/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/Heading/
 */

const Heading = (props:Props) => {
  return (
   <div style={{display:"grid"}}><DxcHeading {...props} /></div>
  );
};

export default Heading;
