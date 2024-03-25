import { StoryFn, Meta } from "@storybook/react";
import { FormInput, FormInputProps, FormInputState } from "./FormInput";
import { useState } from "react";

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
const Template: StoryFn<typeof FormInput> = (args: FormInputProps) => {
	const [value, setValue] = useState<string>("lorem ipsum");

	return <FormInput {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
};

export const Default = Template.bind({});

Default.args = {
	label: "lorem ipsum",
};
