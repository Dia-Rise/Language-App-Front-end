import { StoryFn, Meta } from "@storybook/react";
import { Alert, AlertProps, AlertState } from "./Alert";
import { IconSVG } from "../Icon/Icon";

export default {
	title: "Components/Alert",
	component: Alert,
	argTypes: {
		icon: {
			options: IconSVG,
		},
		state: {
			options: AlertState,
		},
	},
} as Meta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Alert> = (args: AlertProps) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
	icon: IconSVG.Languages,
	header: "lorem ipsum",
	content: "The information present may not be 100% correct.",
	dismissable: true,
	onDismiss: () => alert("you've dismissed this alert componet."),
};

const StatesTemplate: StoryFn<typeof Alert> = (args: AlertProps) => {
	return (
		<div style={{ display: "inline-flex", flexDirection: "column", gap: 16 }}>
			{Object.keys(AlertState).map((current, index) => (
				<Alert key={index} state={AlertState[current as keyof typeof AlertState]} {...args} />
			))}
		</div>
	);
};

export const States = StatesTemplate.bind({});

States.args = {
	icon: IconSVG.Languages,
	header: "lorem ipsum",
	content: "The information present may not be 100% correct.",
	dismissable: true,
	onDismiss: () => alert("you've dismissed this alert componet."),
};
