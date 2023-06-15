import type { StorybookConfig } from '@storybook/react-webpack5'
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public', '../storybook-assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['**/src/views/**'],
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
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
