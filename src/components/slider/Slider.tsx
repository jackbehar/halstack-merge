import { DxcSlider as HalstackSlider } from "@dxc-technology/halstack-react/";
import Props from "@dxc-technology/halstack-react/slider/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/slider/
 */

export default function DxcSlider(props: Props) {
  return (
      <HalstackSlider {...props} key={Math.random()}/>
  );
}
