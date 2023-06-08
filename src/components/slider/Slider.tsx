import { DxcSlider as HalstackSlider } from "@dxc-technology/halstack-react/";
import Props from "@dxc-technology/halstack-react/slider/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/slider/
 */

export interface MergeProps extends Omit<Props, 'defaultValue' | 'labelFormatCallback'> {
  /**
   * Number of the current selected value.
   * @uxpinbind onChange 0
   */
  value?: number;
}

export default function DxcSlider(props: MergeProps) {
  return (
    <div>
    <HalstackSlider {...props}/>
    </div>
  );
}
