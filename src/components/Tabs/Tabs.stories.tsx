import { StoryFn, Meta } from "@storybook/react";
import { Tabs, TabsProps } from "./Tabs";

export default {
	title: "Components/Tabs",
	component: Tabs,
} as Meta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args: TabsProps) => <Tabs {...args} />;

//? maybe create a way to create tabs without JSON data.
//? instead use component elements.
export const Default = Template.bind({});
Default.args = {
	data: [
		{
			id: "1",
			label: "Lorem Ipsum 1",
			content: <>Content 1</>,
		},
		{
			id: "2",
			label: "Lorem Ipsum 2",
			content: <>Content 2</>,
		},
	],
};
