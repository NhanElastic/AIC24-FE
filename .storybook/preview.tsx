import type {Preview} from "@storybook/react";
import "../src/app/globals.css"
import "../src/fonts"
import {withThemeByClassName} from "@storybook/addon-themes";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
}),
  (Story : React.ReactNode) => (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Story />
    </NextThemesProvider>
  ),];

export default preview;
