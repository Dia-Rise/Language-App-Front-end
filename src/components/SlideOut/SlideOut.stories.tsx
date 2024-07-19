import { StoryFn, Meta } from "@storybook/react";
import { SlideOut, SlideOutProps } from "./SlideOut";
import { useState } from "react";

export default {
	title: "Components/SlideOut",
	component: SlideOut,
} as Meta<typeof SlideOut>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SlideOut> = (args: SlideOutProps) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	return (
		<>
			<button onClick={() => setIsVisible(!isVisible)}>Toggle Slide out</button>
			<SlideOut {...args} isOpen={isVisible}>
				<p>hello</p>
			</SlideOut>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};
