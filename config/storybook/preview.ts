import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";
import {StyleDecorator} from "shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
