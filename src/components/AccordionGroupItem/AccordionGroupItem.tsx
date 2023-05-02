import { DxcAccordionGroup } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/accordion/
 */

export type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
type Padding = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

type AccordionPropsType = {
  /**
   * The panel label.
   */
  label: string;
  /**
   * Element or path used as the icon that will be placed next to panel label.
   */
  icon?: string;
  /**
   * Assistive text to be placed on the right side of the panel.
   */
  assistiveText?: string;
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * @deprecated This prop will be removed shortly, consider using the Inset component for this purpose.
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  padding?: Space | Padding;
  /**
   * The expanded panel of the accordion. This area can be used to render
   * custom content.
   */
  children: ReactNode;
};

export default function AccordionGroupItem(props: AccordionPropsType) {
  return <DxcAccordionGroup.Accordion {...props} />;
}
