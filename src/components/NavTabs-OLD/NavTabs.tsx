import { DxcNavTabs as DxcNavTabsUXP } from "@dxc-technology/halstack-react";
import {NavTabsProps} from "@dxc-technology/halstack-react/nav-tabs/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/nav-tabs/
 */

export default function DxcNavTabsOLD(props: NavTabsProps) {
  return (
      <DxcNavTabsUXP {...props} />
  );
}

