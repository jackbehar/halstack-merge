import ApplicationLayout from "../ApplicationLayout";
import Main from "../../Main/Main";
import Sidenav from "../../Sidenav/Sidenav";
import SidenavLink from "../../SidenavLink/SidenavLink";
import SidenavGroup from "../../SidenavGroup/SidenavGroup";
import Header from "../../Header/Header";
import  HeaderDropdown from "../../HeaderDropdown/HeaderDropdown";

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
  <ApplicationLayout uxpId="application-layout">
    <Header uxpId="header" slotName="header" underlined>
    <HeaderDropdown uxpId="header-dropdown" label="Select OS" options={options}/>
    </Header>
    <Sidenav uxpId="sidenav" slotName="sidenav">
      <SidenavGroup uxpId="sidenav-group-1" title="Group title" collapsable>
        <SidenavLink uxpId="sidenav-link-1" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-2" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-3" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-4" href="#">
          Lorem ipsum
        </SidenavLink>
      </SidenavGroup>
    </Sidenav>
    <Main uxpId="main" slotName="main">
      Main
    </Main>
  </ApplicationLayout>
);
