import * as React from "react";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

interface ApplicationLayoutProps {
  children?: React.ReactNode;
  /**
   * Text to be placed next to the hamburger button that toggles the visibility of the sidenav.
   */
  visibilityToggleLabel?: string;
  // You can add more props here
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/layout/
 * @uxpinuseportal
 */
const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
  children,
  visibilityToggleLabel,
}) => {
  // Create an object to hold the children of each slot
  const slots: { [key: string]: React.ReactNode } = {};

  // Loop through the children
  React.Children.forEach(children, (child) => {
    // Add the child's children to the appropriate slot
    const { name } = (child as React.ReactElement).props;
    slots[name] = child;
  });

  return (
    <div style={{ minWidth: "350px", minHeight: "350px" }}>
      <DxcApplicationLayout
        header={slots.header}
        sidenav={slots.sidenav}
        footer={slots.footer}
        visibilityToggleLabel={visibilityToggleLabel}
      >
        <DxcApplicationLayout.Main>{slots.main}</DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </div>
  );
};

export default ApplicationLayout;
