import "app/styles/index.scss";
import { Story } from "@storybook/react";

// export const StyleDecorator = (story: () => Story) => story();
export function StyleDecorator(StoryComponent: Story) {
  return <StoryComponent />;
}
