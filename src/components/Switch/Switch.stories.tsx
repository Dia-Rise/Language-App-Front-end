import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";
import { IconSVG } from "../Icon/Icon";

export default {
	title: "Components/Switch",
	component: Switch,
} as Meta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Switch> = (args: SwitchProps) => {
	const [value, setValue] = useState<boolean>(false);
	return <Switch {...args} onClick={() => setValue(!value)} value={value} />;
};

export const Default = Template.bind({});

Default.args = {
	falseIcon: IconSVG.Hiragana,
	trueIcon: IconSVG.Katakana,
};
