import { StoryFn, Meta } from "@storybook/react";
import { Icon, IconProps, IconSize, IconSVG } from "./Icon";

export default {
	title: "Components/Icon",
	component: Icon,
	argTypes: {
		svg: {
			options: IconSVG,
		},
		size: {
			options: IconSize,
		},
	},
} as Meta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Icon> = (args: IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};

const AllIconsTemplate: StoryFn<typeof Icon> = (args: IconProps) => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
			{(Object.keys(IconSVG) as Array<keyof typeof IconSVG>).map((key) => (
				<Icon {...args} svg={IconSVG[key]} />
			))}
		</div>
	);
};
export const AllIcons = AllIconsTemplate.bind({});
