// eslint-disable-next-line no-unused-vars
import React from "react";
import { HalstackProvider } from "@dxc-technology/halstack-react";
import theme from "./theme";

export default function UXPinWrapper({ children }) {
  return <HalstackProvider advancedTheme={theme}>{children}</HalstackProvider>;
}
