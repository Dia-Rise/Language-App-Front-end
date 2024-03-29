import { StoryFn, Meta } from "@storybook/react";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Hira } from "../../enums";
import { Button, ButtonSize, ButtonVariant } from "../Button/Button";

export default {
	title: "Components/ButtonGroup",
	component: ButtonGroup,
} as Meta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: ButtonGroupProps) => (
	<ButtonGroup {...args}>
		<Button variant={ButtonVariant.Button} onClick={() => {}} size={ButtonSize.SM}>
			{Hira.A}
		</Button>
		<Button variant={ButtonVariant.Button} onClick={() => {}} size={ButtonSize.SM}>
			{Hira.E}
		</Button>
		<Button variant={ButtonVariant.Button} onClick={() => {}} size={ButtonSize.SM}>
			{Hira.I}
		</Button>
	</ButtonGroup>
);

export const Default = Template.bind({});

Default.args = {};
