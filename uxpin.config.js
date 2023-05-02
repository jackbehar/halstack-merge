module.exports = {
  components: {
    categories: [
      {
        name: "Components",
        include: [
          "src/components/BulletedList/BulletedList.tsx",
          "src/components/BulletedListItem/BulletedListItem.tsx",
          "src/components/Chip/Chip.tsx",
          "src/components/DateInput/DateInput.tsx",
          "src/components/Button/Button.tsx",
          "src/components/Card/Card.tsx",
          "src/components/AccordionGroupItem/AccordionGroupItem.tsx",
          "src/components/Typography/Typography.tsx",
          "src/components/Dialog/Dialog.tsx",
          "src/components/Tabs/Tabs.tsx",
          "src/components/Icon/Icon.tsx",
          "src/components/Checkbox/Checkbox.tsx",
          "src/components/Heading/Heading.tsx",
          "src/components/TextInput/TextInput.tsx",
          "src/components/Select/Select.tsx",

        ],
      },
      {
        name: "Containers",
        include: [
          "src/components/Flex/Flex.tsx",
          "src/components/Inset/Inset.tsx",
          "src/components/Bleed/Bleed.tsx",
          "src/components/Box/Box.tsx",
        ],
      },
      {
        name: "App Layout",
        include: [
          "src/components/ApplicationLayout/ApplicationLayout.tsx",
          "src/components/Header/Header.tsx",
          "src/components/Main/Main.tsx",
          "src/components/Footer/Footer.tsx",
          "src/components/Sidenav/Sidenav.tsx",
          "src/components/SidenavGroup/SidenavGroup.tsx",
          "src/components/SidenavLink/SidenavLink.tsx",
          "src/components/SidenavSection/SidenavSection.tsx",
          "src/components/SidenavTitle/SidenavTitle.tsx",
          "src/components/HeaderDropdown/HeaderDropdown.tsx",
        ],
      },
      {
        name: "Utilities",
        include: [
          "src/components/ThemeCustomizer/ThemeCustomizer.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "webpack.config.js",
  },
  name: "DXC Halstack Design System",
};
