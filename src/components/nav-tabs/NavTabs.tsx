import { DxcNavTabs as HalstackNavTabs } from "@dxc-technology/halstack-react";
import { NavTabsProps as NavTabsPropsType } from "@dxc-technology/halstack-react/nav-tabs/types";
import Tab from "./tab/Tab";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/nav-tabs/
 */
const DxcNavTabs = (props: NavTabsPropsType) => (
  <HalstackNavTabs {...props} key={Math.random()} />
);

DxcNavTabs.Tab = Tab;

export default DxcNavTabs;
