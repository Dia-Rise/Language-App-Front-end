import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonColors, ButtonAppearance, ButtonSize, ButtonProps, ButtonVariant } from "./Button";

export default {
	title: "Components/Buttons",
	component: Button,
	argTypes: {
		color: {
			options: ButtonColors,
		},
		appearance: {
			options: ButtonAppearance,
		},
		variant: {
			options: ButtonVariant,
		},
		size: {
			options: ButtonSize,
		},
	},
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args}>Share work</Button>;

export const Default = Template.bind({});

Default.args = {
	color: ButtonColors.Primary,
	variant: ButtonVariant.Button,
};
