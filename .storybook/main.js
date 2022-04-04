module.exports = {
  stories: [
    {
      // 👇 The directory field sets the directory your stories
      directory: "../components/Navbar",
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: "Components",
      // 👇 Storybook will load all files that contain the stories extensio
      files: "*.stories.*",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};