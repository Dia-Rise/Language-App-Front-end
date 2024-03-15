import { StoryFn, Meta } from "@storybook/react";
import { Action, ActionSize } from "../../ts/components/Action";
import { ActionGroup, ActionGroupProps } from "../../ts/components/ActionGroup";
import { Hira } from "../../ts/enums";

export default {
	title: "Components/ActionGroup",
	component: ActionGroup,
} as Meta<typeof ActionGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Action> = (args: ActionGroupProps) => (
	<ActionGroup {...args}>
		<Action onClick={() => {}} size={ActionSize.SM}>
			{Hira.A}
		</Action>
		<Action onClick={() => {}} size={ActionSize.SM}>
			{Hira.E}
		</Action>
		<Action onClick={() => {}} size={ActionSize.SM}>
			{Hira.I}
		</Action>
	</ActionGroup>
);

export const Default = Template.bind({});

Default.args = {};
