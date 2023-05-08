import DxcApplicationLayout from "../ApplicationLayout";
import DxcMain from "../../Main/Main";
import DxcSidenav from "../../Sidenav/Sidenav";
import DxcSidenavLink from "../../SidenavLink/SidenavLink";
import DxcSidenavGroup from "../../SidenavGroup/SidenavGroup";
import DxcHeader from "../../Header/Header";
import DxcHeaderDropdown from "../../HeaderDropdown/HeaderDropdown";
import DxcSidenavTitle from "../../SidenavTitle/SidenavTitle";

const options = [
  {
    value: 1,
    label: "Android"
  },
  {
    value: 2,
    label: "Windows"
  },
  {
    value: 3,
    label: "IOS"
  }
];

export default (
  <DxcApplicationLayout uxpId="dxc-application-layout">
    <DxcHeader uxpId="header" slotName="header" underlined>
    <DxcHeaderDropdown uxpId="header-dropdown" label="Select OS" options={options}/>
    </DxcHeader>
    <DxcSidenav uxpId="sidenav" slotName="sidenav">
    <DxcSidenavTitle uxpId="sidenav-title">
    Sidenav Title
  </DxcSidenavTitle>
      <DxcSidenavGroup uxpId="sidenav-group-1" title="Group title" collapsable>
        <DxcSidenavLink uxpId="sidenav-link-1" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-2" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-3" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-4" href="#">
          Lorem ipsum
        </DxcSidenavLink>
      </DxcSidenavGroup>
    </DxcSidenav>
    <DxcMain uxpId="main" slotName="main">
      Main
    </DxcMain>
  </DxcApplicationLayout>
);
