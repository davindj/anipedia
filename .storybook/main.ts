import type { StorybookConfig } from '@storybook/react-webpack5'
const config: StorybookConfig = {
  stories: ['../src/**/stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public', '../storybook-assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
