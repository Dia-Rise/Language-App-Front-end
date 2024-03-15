import { StoryFn, Meta } from "@storybook/react";
import { Action, ActionColors, ActionProps, ActionSize, ActionVariant } from "../../ts/components/Action";

export default {
	title: "Components/Actions",
	component: Action,
	argTypes: {
		color: {
			options: ActionColors,
		},
		variant: {
			options: ActionVariant,
		},
		size: {
			options: ActionSize,
		},
	},
} as Meta<typeof Action>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Action> = (args: ActionProps) => <Action {...args}>Lorem ipsum</Action>;

export const Default = Template.bind({});

Default.args = {
	color: ActionColors.Primary,
};
