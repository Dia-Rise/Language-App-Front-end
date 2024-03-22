import { StoryFn, Meta } from "@storybook/react";
import { FormInput, FormInputProps, FormInputState } from "./FormInput";

export default {
	title: "Components/Form/Input",
	component: FormInput,
	argTypes: {
		state: {
			options: FormInputState,
		},
	},
} as Meta<typeof FormInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof FormInput> = (args: FormInputProps) => <FormInput {...args} />;

export const Default = Template.bind({});

Default.args = {
	value: "lorem ipsum",
};
