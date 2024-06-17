import { StoryFn, Meta } from "@storybook/react";
import { Pill, PillColors, PillProps } from "./Pill";
import { IconSVG } from "../Icon/Icon";

export default {
	title: "Components/Pill",
	component: Pill,
	argTypes: {
		icon: {
			options: IconSVG,
		},
		color: {
			options: PillColors,
		},
	},
} as Meta<typeof Pill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Pill> = (args: PillProps) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "lorem ipsum",
	color: PillColors.Light,
};

const AllPillsTemplate: StoryFn<typeof Pill> = () => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
			{(Object.keys(PillColors) as Array<keyof typeof PillColors>).map((key) => (
				<Pill label="lorem ipsum" color={PillColors[key]} icon={IconSVG.Book} />
			))}
		</div>
	);
};
export const AllPillTypes = AllPillsTemplate.bind({});
