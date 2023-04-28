import Button from "../../Button/Button";
import ApplicationLayout from "../ApplicationLayout";
import Main from "../../Main/Main";
import Sidenav from "../../Sidenav/Sidenav";
import SidenavLink from "../../SidenavLink/SidenavLink";
import SidenavGroup from "../../SidenavGroup/SidenavGroup";
import Header from "../../Header/Header";

export default (
  <ApplicationLayout uxpId="application-layout">
    <Header uxpId="header" slotName="header" underlined />
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
