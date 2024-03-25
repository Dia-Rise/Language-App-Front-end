import { StoryFn, Meta } from "@storybook/react";
import { InputLabel, InputLabelProps } from "./InputLabel";

export default {
	title: "Components/Form/InputLabel",
	component: InputLabel,
	argTypes: {
		// state: {
		// 	options: InputLabelState,
		// },
	},
} as Meta<typeof InputLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputLabel> = (args: InputLabelProps) => <InputLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
	value: "lorem ipsum",
};
