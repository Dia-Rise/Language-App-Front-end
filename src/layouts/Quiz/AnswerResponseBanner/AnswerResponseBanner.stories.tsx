import { StoryFn, Meta } from "@storybook/react";
import { AnswerResponseBanner, AnswerResponseBannerProps, AnswerResponseState } from "./AnswerResponseBanner";

export default {
	title: "Layouts/Quiz/AnswerResponseBanner",
	component: AnswerResponseBanner,
	argTypes: {
		state: {
			options: AnswerResponseState,
		},
	},
} as Meta<typeof AnswerResponseBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AnswerResponseBanner> = (args) => <AnswerResponseBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
	state: AnswerResponseState.Correct,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
	state: AnswerResponseState.Correct,
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl sem, vestibulum vitae lectus eu, fringilla fermentum mauris. Donec ut mauris sem.",
};

const AllStatesTemplate: StoryFn<typeof AnswerResponseBanner> = (args: AnswerResponseBannerProps) => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
			{(Object.keys(AnswerResponseState) as Array<keyof typeof AnswerResponseState>).map((key) => (
				<AnswerResponseBanner {...args} state={AnswerResponseState[key]} />
			))}
		</div>
	);
};
export const AllStates = AllStatesTemplate.bind({});
