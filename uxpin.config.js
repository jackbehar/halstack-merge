module.exports = {
  components: {
    categories: [
      {
        name: "TypeScript components",
        include: [
          "src/components/Button/Button.tsx",
          "src/components/Card/Card.tsx",
          "src/components/Accordion/Accordion.tsx",
          "src/components/Typography/Typography.tsx",
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
          "src/components/ApplicationLayout/ApplicationLayout.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "webpack.config.js",
  },
  name: "DXC Halstack Design System",
};
