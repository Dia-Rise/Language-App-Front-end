import { StoryFn, Meta } from "@storybook/react";
import { Backdrop, BackdropProps } from "./Backdrop";
import { useState } from "react";

export default {
	title: "Components/Backdrop",
	component: Backdrop,
	argTypes: {},
} as Meta<typeof Backdrop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Backdrop> = (args: BackdropProps) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<>
			<button onClick={() => setIsVisible(true)}>Spawn Backdrop</button>
			<Backdrop onClick={() => setIsVisible(false)} {...{ isVisible, args }} />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};
