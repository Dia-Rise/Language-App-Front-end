import { StoryFn, Meta } from "@storybook/react";
import { WordModal } from "./WordModal";

export default {
	title: "Layouts/WordModal",
	component: WordModal,
	argTypes: {},
} as Meta<typeof WordModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof WordModal> = (args) => <WordModal {...args} />;

export const U_Verb = Template.bind({});
U_Verb.args = {
	isOpen: true,
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

export const I_Adjective = Template.bind({});
I_Adjective.args = {
	isOpen: true,
	word: {
		id: "2",
		meaning: "Fun, Funny",
		type: "adjective",
		adjectiveType: "i",
		dictionary: {
			furigana: "おもしろい",
			romanji: "omoshiroi",
		},
	},
};

export const NA_Adjective = Template.bind({});
NA_Adjective.args = {
	isOpen: true,
	word: {
		id: "3",
		meaning: "Quiet",
		type: "adjective",
		adjectiveType: "na",
		dictionary: {
			furigana: "しずか",
			romanji: "shizuka",
		},
	},
};
