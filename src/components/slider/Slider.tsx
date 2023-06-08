import { DxcSlider as HalstackSlider } from "@dxc-technology/halstack-react/";
import Props from "@dxc-technology/halstack-react/slider/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/slider/
 */

export interface MergeProps extends Props {
  /**
   * Number of the current selected value.
   * @uxpinbind onChange 0
   */
  value?: number;
  /**
   * Prop not needed for controlled component
   * @uxpinignoreprop
   */
  defaulValue?: number;
}

export default function DxcSlider(props: MergeProps) {
  return (
    <div>
    <HalstackSlider {...props} />
    </div>
  );
}
