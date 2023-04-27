module.exports = {
  components: {
    categories: [
      {
        name: "TypeScript components",
        include: [
          "src/components/BulletedList/BulletedList.tsx",
          "src/components/BulletedListItem/BulletedListItem.tsx",
          "src/components/Sidenav/Sidenav.tsx",
          "src/components/SidenavGroup/SidenavGroup.tsx",
          "src/components/SidenavLink/SidenavLink.tsx",
          "src/components/SidenavSection/SidenavSection.tsx",
          "src/components/SidenavTitle/SidenavTitle.tsx",
          "src/components/Header/Header.tsx",
          "src/components/Main/Main.tsx",
          "src/components/ApplicationLayout/ApplicationLayout.jsx",
          "src/components/Button/Button.tsx",
          "src/components/Card/Card.tsx",
          "src/components/Accordion/Accordion.tsx",
          "src/components/Typography/Typography.tsx",
          "src/components/Dialog/Dialog.tsx",
          "src/components/Tabs/Tabs.tsx",
          "src/components/Icon/Icon.tsx",

        ],
      },
      {
        name: "JS components",
        include: [
          "src/components/ThemeCustomizer/ThemeCustomizer.js",
          "src/components/Checkbox/Checkbox.js",
          "src/components/TextInput/TextInput.js",
          "src/components/Chip/Chip.js",
          "src/components/Flex/Flex.js",
          "src/components/Select/Select.js",
          "src/components/Heading/Heading.js",
        ],
      },
      {
        name: "Layout",
        include: [
          "src/components/Inset/Inset.js",
          "src/components/Bleed/Bleed.js",
          "src/components/Box/Box.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "webpack.config.js",
  },
  name: "DXC Halstack Design System",
};
