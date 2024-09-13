import { StoryFn, Meta } from "@storybook/react";
import { Segments, SegmentsProps } from "./Segments";
import { IconSVG } from "../Icon/Icon";

export default {
	title: "Components/Segments",
	component: Segments,
	argTypes: {},
} as Meta<typeof Segments>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Segments> = (args: SegmentsProps) => <Segments {...args} />;

export const Default = Template.bind({});
Default.args = {
	amount: 10,
	amountCompleted: 1,
};
