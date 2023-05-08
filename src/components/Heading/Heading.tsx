import { DxcHeading as DxcHeadingUXP } from "@dxc-technology/halstack-react";
import Props from "@dxc-technology/halstack-react/heading/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/Heading/
 */

const DxcHeading = (props:Props) => {
  return (
   <div style={{display:"grid"}}><DxcHeadingUXP {...props} /></div>
  );
};

export default DxcHeading;
