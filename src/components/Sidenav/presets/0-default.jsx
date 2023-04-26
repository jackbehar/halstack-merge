import Sidenav from "../Sidenav";
import SidenavTitle from "../../SidenavTitle/SidenavTitle";
import SidenavGroup from "../../SidenavGroup/SidenavGroup";
import SidenavSection from "../../SidenavSection/SidenavSection";
import SidenavLink from "../../SidenavLink/SidenavLink";

export default (
  <Sidenav
    uxpId="sidenav"
    title={<SidenavTitle uxpId="sidenav-title">Sidenav Title</SidenavTitle>}
  >
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

    <SidenavSection uxpId="sidenav-section-2">
      <SidenavLink uxpId="sidenav-link-9" href="#">
        Lorem ipsum
      </SidenavLink>
      <SidenavLink uxpId="sidenav-link-10" href="#">
        Lorem ipsum
      </SidenavLink>
      <SidenavGroup uxpId="sidenav-group-3" title="Group title" collapsable>
        <SidenavLink uxpId="sidenav-link-11" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-12" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-13" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-14" href="#">
          Lorem ipsum
        </SidenavLink>
      </SidenavGroup>
      <SidenavGroup uxpId="sidenav-group-4" title="Group title" collapsable>
        <SidenavLink uxpId="sidenav-link-15" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-16" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-17" href="#">
          Lorem ipsum
        </SidenavLink>
        <SidenavLink uxpId="sidenav-link-18" href="#">
          Lorem ipsum
        </SidenavLink>
      </SidenavGroup>
    </SidenavSection>
  </Sidenav>
);
