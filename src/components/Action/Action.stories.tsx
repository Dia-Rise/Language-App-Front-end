import { StoryFn, Meta } from "@storybook/react";
import { Action, ActionColors, ActionVariant, ActionSize, ActionProps, ActionAppearance } from "./Action";

export default {
	title: "Components/Actions",
	component: Action,
	argTypes: {
		color: {
			options: ActionColors,
		},
		appearance: {
			options: ActionAppearance,
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
const Template: StoryFn<typeof Action> = (args: ActionProps) => <Action {...args}>A</Action>;

export const Default = Template.bind({});

Default.args = {
	color: ActionColors.Primary,
	variant: ActionVariant.Toggle,
};
