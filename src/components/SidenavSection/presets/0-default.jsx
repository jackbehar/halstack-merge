import SidenavSection from "../SidenavSection";
import SidenavGroup from "../../SidenavGroup/SidenavGroup";
import SidenavLink from "../../SidenavLink/SidenavLink";

export default (
  <SidenavSection uxpId="sidenav-section-1">
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
    <SidenavGroup uxpId="sidenav-group-2" title="Group title">
      <SidenavLink uxpId="sidenav-link-5" href="#">
        Lorem ipsum
      </SidenavLink>
      <SidenavLink uxpId="sidenav-link-6" href="#">
        Lorem ipsum
      </SidenavLink>
      <SidenavLink uxpId="sidenav-link-7" href="#">
        Lorem ipsum
      </SidenavLink>
      <SidenavLink uxpId="sidenav-link-8" href="#">
        Lorem ipsum
      </SidenavLink>
    </SidenavGroup>
  </SidenavSection>
);
