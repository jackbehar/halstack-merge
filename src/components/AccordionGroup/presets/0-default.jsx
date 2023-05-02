import AccordionGroup from "../AccordionGroup";
import AccordionGroupItem from "../../AccordionGroupItem/AccordionGroupItem";
import Inset from "../../Inset/Inset";

export default (
  <AccordionGroup uxpId="accordion-group">
    <AccordionGroupItem
      uxpId="accordion-group-item"
      label="How to edit your profile?"
    >
      <Inset uxpId="accordion-group-inset" space="1.5rem">
        To edit your profile you need to go to Settings and click on Profile.
      </Inset>
    </AccordionGroupItem>
    <AccordionGroupItem uxpId="accordion-group-item-2" label="How to log out?">
      <Inset uxpId="accordion-group-inset" space="1.5rem">
        To edit your profile you need to go to Settings and click on Log out.
      </Inset>
    </AccordionGroupItem>
  </AccordionGroup>
);
