// import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { WordFrame } from "./WordFrame";
// import { IconSVG } from "../../components";
// import { Position } from "../../ts/enums";

export default {
	title: "Layouts/WordFrame",
	component: WordFrame,
	argTypes: {
		// icon: {
		// 	options: IconSVG,
		// },
		// color: {
		// 	options: WordFrameColor,
		// },
	},
} as Meta<typeof WordFrame>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof WordFrame> = (args) => <WordFrame {...args} />;

export const Default = Template.bind({});

Default.args = {
	word: {
		meaning: "To Speak",
		type: "irregular",
		conjugation: {
			dictionary: {
				kanji: "lorem ipsum",
				furigana: "はなす",
				romanji: "hana-suru",
			},
		},
	},
};
