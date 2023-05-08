import DxcSidenavSection from "../SidenavSection";
import DxcSidenavGroup from "../../SidenavGroup/SidenavGroup";
import DxcSidenavLink from "../../SidenavLink/SidenavLink";

export default (
  <DxcSidenavSection uxpId="sidenav-section-1">
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
    <DxcSidenavGroup uxpId="sidenav-group-2" title="Group title">
      <DxcSidenavLink uxpId="sidenav-link-5" href="#">
        Lorem ipsum
      </DxcSidenavLink>
      <DxcSidenavLink uxpId="sidenav-link-6" href="#">
        Lorem ipsum
      </DxcSidenavLink>
      <DxcSidenavLink uxpId="sidenav-link-7" href="#">
        Lorem ipsum
      </DxcSidenavLink>
      <DxcSidenavLink uxpId="sidenav-link-8" href="#">
        Lorem ipsum
      </DxcSidenavLink>
    </DxcSidenavGroup>
  </DxcSidenavSection>
);
