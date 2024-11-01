import { StoryFn, Meta } from "@storybook/react";
import { IconSVG } from "../Icon/Icon";
import { CircularProgress, CircularProgressProps } from "./CircularProgress";

export default {
	title: "Components/CircularProgress",
	component: CircularProgress,
	argTypes: {},
} as Meta<typeof CircularProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CircularProgress> = (args: CircularProgressProps) => (
	<CircularProgress {...args}>7/12</CircularProgress>
);

export const Default = Template.bind({});

Default.args = {
	percent: 10,
};
