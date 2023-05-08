import DxcSidenav from "../Sidenav";
import DxcSidenavTitle from "../../SidenavTitle/SidenavTitle";
import DxcSidenavGroup from "../../SidenavGroup/SidenavGroup";
import DxcSidenavSection from "../../SidenavSection/SidenavSection";
import DxcSidenavLink from "../../SidenavLink/SidenavLink";

export default (
  <DxcSidenav uxpId="sidenav" slotName="sidenav">
    <DxcSidenavTitle uxpId="sidenav-title">Sidenav Title</DxcSidenavTitle>
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

    <DxcSidenavSection uxpId="sidenav-section-2">
      <DxcSidenavLink uxpId="sidenav-link-9" href="#">
        Lorem ipsum
      </DxcSidenavLink>
      <DxcSidenavLink uxpId="sidenav-link-10" href="#">
        Lorem ipsum
      </DxcSidenavLink>
      <DxcSidenavGroup uxpId="sidenav-group-3" title="Group title" collapsable>
        <DxcSidenavLink uxpId="sidenav-link-11" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-12" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-13" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-14" href="#">
          Lorem ipsum
        </DxcSidenavLink>
      </DxcSidenavGroup>
      <DxcSidenavGroup uxpId="sidenav-group-4" title="Group title" collapsable>
        <DxcSidenavLink uxpId="sidenav-link-15" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-16" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-17" href="#">
          Lorem ipsum
        </DxcSidenavLink>
        <DxcSidenavLink uxpId="sidenav-link-18" href="#">
          Lorem ipsum
        </DxcSidenavLink>
      </DxcSidenavGroup>
    </DxcSidenavSection>
  </DxcSidenav>
);
