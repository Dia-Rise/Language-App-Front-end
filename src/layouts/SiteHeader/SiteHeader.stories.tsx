// import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SiteHeader } from "./SiteHeader";

export default {
	title: "Layouts/SiteHeader",
	component: SiteHeader,
	argTypes: {},
} as Meta<typeof SiteHeader>;

const Template: StoryFn<typeof SiteHeader> = (args) => <SiteHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "lorem ipsum",
};
