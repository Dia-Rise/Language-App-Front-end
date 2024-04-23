import { StoryFn, Meta } from "@storybook/react";
import { WordModal } from "./WordModal";

export default {
	title: "Layouts/WordModal",
	component: WordModal,
	argTypes: {},
} as Meta<typeof WordModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof WordModal> = (args) => <WordModal {...args} />;

export const Default = Template.bind({});

Default.args = {
	word: {
		id: "1",
		meaning: "To Speak",
		type: "verb",
		verbType: "u",
		dictionary: {
			furigana: "はなす",
			romanji: "hanasu",
		},
	},
};
