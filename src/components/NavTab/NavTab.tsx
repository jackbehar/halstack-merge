import { DxcNavTabs as DxcNavTabsUXP } from "@dxc-technology/halstack-react";
import {TabProps} from "@dxc-technology/halstack-react/nav-tabs/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/nav-tabs/
 */

export default function DxcNavTab(props: TabProps) {
  return (
      <DxcNavTabsUXP.Tab {...props} />
  );
}

