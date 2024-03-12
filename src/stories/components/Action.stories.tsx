import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Action, ActionProps } from "../../ts/components/Action";

export default {
	title: "Components/Actions",
	component: Action,
} as Meta<typeof Action>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Action> = (args: ActionProps) => <Action {...args} />;

export const Default = Template.bind({});

Default.args = {};
