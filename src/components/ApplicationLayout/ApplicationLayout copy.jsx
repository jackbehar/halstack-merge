import React from "react";
import PropTypes from "prop-types";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/layout/
 * @uxpinuseportal
 */
const ApplicationLayout = (props) => {
  // Create an object to hold the children of each slot
  const slots = {};

  // Loop through the children 
  React.Children.forEach(props.children, (child) => {
    // Add the child's children to the appropriate slot
    const { name } = child.props;
    slots[name] = child;
  });

  return (
      <div style={{ minWidth: "350px", minHeight: "350px" }}>
        <DxcApplicationLayout
          header={slots.header}
          sidenav={slots.sidenav}
          footer={slots.footer}
          {...props}
        >
          <DxcApplicationLayout.Main>{slots.main}</DxcApplicationLayout.Main>
        </DxcApplicationLayout>
      </div>
  );
};

ApplicationLayout.propTypes = {
  children: PropTypes.node,
  /**
   * Text to be placed next to the hamburger button that toggles the visibility of the sidenav.
   */
  visibilityToggleLabel: PropTypes.string,
};

export default ApplicationLayout;
