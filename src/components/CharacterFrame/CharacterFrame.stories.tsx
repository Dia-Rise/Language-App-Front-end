import { StoryFn, Meta } from "@storybook/react";
import { CharacterFrame, CharacterFrameProps } from "./CharacterFrame";

export default {
	title: "Components/CharacterFrames",
	component: CharacterFrame,
} as Meta<typeof CharacterFrame>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CharacterFrame> = (args: CharacterFrameProps) => <CharacterFrame {...args} />;

export const Default = Template.bind({});

Default.args = {
	character: "あ",
};
