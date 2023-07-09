import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AppButton from "./AppButton";

export default {
  title: "shared/Button",
  component: AppButton,
  argTypes: {
    backgroundColor: {control: "color"},
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: "clear",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: "outline",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: "outline",
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
