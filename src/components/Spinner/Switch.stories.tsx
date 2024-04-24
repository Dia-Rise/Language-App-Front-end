import { StoryFn, Meta } from "@storybook/react";
import { Spinner, SpinnerProps } from "./Spinner";

export default {
	title: "Components/Spinner",
	component: Spinner,
} as Meta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {};
