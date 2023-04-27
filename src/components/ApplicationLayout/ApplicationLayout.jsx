import React from "react";
import PropTypes from "prop-types";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/layout/
* @uxpinuseportal
 */
const ApplicationLayout = ({ children }) => {
  // Create an object to hold the children of each slot
  const slots = {};

  // Loop through the children of the SlotMachine component
  React.Children.forEach(children, (child) => {
    console.log("comp: ", child)
    // Check if the child is a Slot component
    // if (child.type === Slot) {
      // Add the child's children to the appropriate slot
      const { name } = child.props;
      slots[name] = child;
      
    // }
  });

  // Render the slots with their children
  return (
    <div>
        {/* <div>{slots.header}</div>
        <div>{slots.sidenav}</div>
        <div>{slots.main}</div>
        <div>{slots.footer}</div> */}


        <div style={{ minWidth: "350px", minHeight: "350px" }}>
      <DxcApplicationLayout
      header={slots.header}
      sidenav={slots.sidenav}
      
      >
        <DxcApplicationLayout.Main>{slots.main}</DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </div>

 
  
    </div>
  );
};

ApplicationLayout.propTypes = {  
  children:PropTypes.node,
      /**
     * Text to be placed next to the hamburger button that toggles the visibility of the sidenav.
     */
      visibilityToggleLabel: PropTypes.string,
}

  

export default ApplicationLayout;