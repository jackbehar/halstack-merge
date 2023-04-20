import { DxcTypography } from "@dxc-technology/halstack-react";
import TypographyPropsType from "@dxc-technology/halstack-react/typography/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/typography/
 */

export default function Typography(props: TypographyPropsType) {


  return (
    <div style={{ display: "grid" }}>
      <DxcTypography {...props}>
        {typeof props.children === 'string'
          ? <div dangerouslySetInnerHTML={{ __html: `${props.children}` }} />
          : props.children}
      </DxcTypography>
    </div>
  );
}
