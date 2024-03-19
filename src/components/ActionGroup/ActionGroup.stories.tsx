import { StoryFn, Meta } from "@storybook/react";
import { ActionGroup, ActionGroupProps } from "./ActionGroup";
import { Hira } from "../../enums";
import { Action, ActionSize, ActionVariant } from "../Action/Action";

export default {
	title: "Components/ActionGroup",
	component: ActionGroup,
} as Meta<typeof ActionGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Action> = (args: ActionGroupProps) => (
	<ActionGroup {...args}>
		<Action variant={ActionVariant.Button} onClick={() => {}} size={ActionSize.SM}>
			{Hira.A}
		</Action>
		<Action variant={ActionVariant.Button} onClick={() => {}} size={ActionSize.SM}>
			{Hira.E}
		</Action>
		<Action variant={ActionVariant.Button} onClick={() => {}} size={ActionSize.SM}>
			{Hira.I}
		</Action>
	</ActionGroup>
);

export const Default = Template.bind({});

Default.args = {};
