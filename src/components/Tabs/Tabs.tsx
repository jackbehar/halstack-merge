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
  const wifiIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  );

  return (
    <div style={{display:"grid"}}>
      <img src="/arrow-down.svg" alt="SVG as an image"/>
      <DxcTabs
      
        {...props}
        tabs={[
          {
            label: "Mail",
          },
          {
            label: "Calendar",
          },
          {
            label: "Contacts",
            icon: "s",
          },
        ]} />
    </div>
  );
}
