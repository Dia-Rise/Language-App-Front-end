import { StoryFn, Meta } from "@storybook/react";
import { SlideOut, SlideOutProps } from "./SlideOut";

export default {
	title: "Components/SlideOut",
	component: SlideOut,
} as Meta<typeof SlideOut>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SlideOut> = (args: SlideOutProps) => {
	return (
		<>
			<SlideOut {...args}>
				<p>hello</p>
			</SlideOut>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
};
