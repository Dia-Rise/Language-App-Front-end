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
Default.args = {
	svg: IconSVG.Book
};

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

const AllIconsSizesTemplate: StoryFn<typeof Icon> = (args: IconProps) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
			{(Object.keys(IconSize) as Array<keyof typeof IconSize>).slice(1).map((key) => (
				<>
				<span>{key}</span>
				<Icon {...args} size={IconSize[key]} />
				</>
				
			))}
		</div>
	);
};
export const AllSizes = AllIconsSizesTemplate.bind({
	svg: IconSVG.Book
});
