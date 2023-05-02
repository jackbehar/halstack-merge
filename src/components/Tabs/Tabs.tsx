import React from 'react';
import { DxcTabs } from "@dxc-technology/halstack-react";
import TabsPropsType from "@dxc-technology/halstack-react/tabs/types";
// import { ReactComponent as YourSvg } from '../../icons/arrow-down.svg';
// import MyImageSvg from '../../icons/arrow-down.svg';

export interface MergeTabsPropsType extends TabsPropsType {
  /**
   * If `true`, the component is checked.
   * @uxpinbind onTabClick 1
   */
  activeTabIndex?:number
}
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/tabs/
 */
export default function Tabs(props: MergeTabsPropsType) {


  return (
    <div style={{display:"grid"}}>
      <DxcTabs
        {...props}
         />
    </div>
  );
}
