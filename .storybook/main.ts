import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  env: {
    IMAGE_API_BASE_URL: "http://selab.nhtlongcs.com:20890/",
    IMAGE_BASE_URL: "http://selab.nhtlongcs.com:20167/preview/",
  }
};
export default config;
