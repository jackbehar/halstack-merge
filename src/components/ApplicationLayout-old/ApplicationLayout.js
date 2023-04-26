import React from "react";
import PropTypes from "prop-types";
import { DxcApplicationLayout } from "@dxc-technology/halstack-react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/application-layout/
 */

export default function ApplicationLayout(props) {
  return (
    <div style={{ minWidth: "350px", minHeight: "350px" }}>
      <DxcApplicationLayout {...props}>
        <DxcApplicationLayout.Main>{props.children}</DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </div>
  );
}

ApplicationLayout.propTypes = {
  /**
   * Text to be placed next to the hamburger button that toggles the visibility of the sidenav.
   */
  visibilityToggleLabel: PropTypes.string,
  /**
   * Header of the application layout shown at the top of the screen. It is optional and if it is not specified, the default header will be shown. Please check the Header documentation here.
   */
  header: PropTypes.node,
  /**
Footer of the application layout shown at the bottom of the screen. It is optional and if it is not specified, the default header will be shown. Please check the Footer documentation here.
*/
  footer: PropTypes.node,
  /**
Sidenav of the application layout shown at the left side of the screen. Please check the Sidenav documentation here.
*/
  sidenav: PropTypes.node,
  /**
Use the DxcApplicationLayout.Main provided to render main content.
*/
  children: PropTypes.node,
};
