import * as React from "react";
import QuickNav from "../QuickNav";

export default (
  <QuickNav
    uxpId="quick-nav"
    title="Contents"
    links={[
      {
        label: "Overview",
      },
      {
        label: "Principles",
        links: [
          { label: "Color" },
          { label: "Spacing" },
          { label: "Typography" },
          { label: "Layout" },
          {
            label: "Themes",
            links: [{ label: "Light" }, { label: "Dark" }],
          },
        ],
      },
    ]}
  ></QuickNav>
);
