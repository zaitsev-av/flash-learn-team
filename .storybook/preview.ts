import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import { themes } from '@storybook/theming'
import { withRouter } from "storybook-addon-react-router-v6";
const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#171717' },
      light: { ...themes.normal, appBg: '#fffdfd' },
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
export const decorators = [withRouter]
export default preview
