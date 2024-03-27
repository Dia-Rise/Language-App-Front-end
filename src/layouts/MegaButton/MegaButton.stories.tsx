// import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MegaButton, MegaButtonColor } from "./MegaButton";
import { IconSVG } from "../../components";
// import { Position } from "../../ts/enums";

export default {
	title: "Layouts/MegaButton",
	component: MegaButton,
	argTypes: {
		icon: {
			options: IconSVG,
		},
		color: {
			options: MegaButtonColor,
		},
	},
} as Meta<typeof MegaButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MegaButton> = (args) => <MegaButton {...args} />;

export const Default = Template.bind({});

Default.args = {
	icon: IconSVG.Book,
	label: "Lorem ipsum",
	subLabel: "Lorem ipsum",
	color: MegaButtonColor.Orange,
};
