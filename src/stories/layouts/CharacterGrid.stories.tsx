// import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { CharacterGrid } from "../../ts/layouts/CharacterGrid/CharacterGrid";
// import { Position } from "../../ts/enums";

export default {
	title: "Layouts/CharacterGrid",
	component: CharacterGrid,
} as Meta<typeof CharacterGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CharacterGrid> = () => <CharacterGrid />;

export const Default = Template.bind({});

Default.args = {};
