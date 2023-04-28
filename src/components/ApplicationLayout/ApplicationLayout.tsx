import * as React from "react";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";
import AppLayoutMainPropsType from "@dxc-technology/halstack-react/layout/types";

  /**
   * We extend teh interface here just to add the uxpinignoreprop
   * to hide it since we now use children layer nodes in UXPin
   */
export interface MergeAppLayoutMainPropsType extends AppLayoutMainPropsType {
  
  /** @uxpinignoreprop */
  children: React.ReactNode;

  /** @uxpinignoreprop */
  footer: React.ReactNode;

  /** @uxpinignoreprop */
  sidenav: React.ReactNode;

  /** @uxpinignoreprop */
  header: React.ReactNode;
}

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/layout/
 * @uxpinuseportal
 */
const ApplicationLayout: React.FC<MergeAppLayoutMainPropsType> = ({
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
