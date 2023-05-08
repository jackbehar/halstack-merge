import { DxcTypography as DxcTypographyUXP } from "@dxc-technology/halstack-react";
import TypographyPropsType from "@dxc-technology/halstack-react/typography/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/typography/
 */

export default function DxcTypography(props: TypographyPropsType) {


  return (
    <div>
      <DxcTypographyUXP {...props}>
        {typeof props.children === 'string'
          ? <span dangerouslySetInnerHTML={{ __html: `${props.children}` }} />
          : props.children}
      </DxcTypographyUXP>
      </div>
  );
}
