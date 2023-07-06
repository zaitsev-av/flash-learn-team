import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import { themes } from '@storybook/theming'
const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#171717' },
      light: { ...themes.normal, appBg: '#808080' },
    },
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
