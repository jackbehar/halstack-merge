import {
  DxcNavTabs as HalstackNavTabs,
  HalstackContext,
} from "@dxc-technology/halstack-react/";
import { TabProps as TabPropsType } from "@dxc-technology/halstack-react/nav-tabs/types";
import { NavTabsContext } from "@dxc-technology/halstack-react/nav-tabs/NavTabs";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/next/components/nav-tabs/#props-dxcnavtabs.tab
 * @uxpinnamespace DxcNavTabs
 */
const Tab = (props: TabPropsType) => {
  const colorsTheme = useContext(HalstackContext);
  const contextValue = useContext(NavTabsContext);

  return (
    <ThemeProvider theme={colorsTheme.navTabs}>
      <NavTabsContext.Provider
        value={{
          iconPosition: contextValue?.iconPosition ?? "left",
          tabIndex: contextValue?.tabIndex ?? 0,
          hasIcons: contextValue?.hasIcons ?? false,
          focusedLabel: contextValue?.focusedLabel ?? "",
        }}
      >
        <HalstackNavTabs.Tab {...props} />
      </NavTabsContext.Provider>
    </ThemeProvider>
  );
};

export default Tab;
