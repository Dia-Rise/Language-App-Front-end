import { StoryFn, Meta } from "@storybook/react";
import { IconSVG } from "../Icon/Icon";
import { Accordion, AccordionProps } from "./Accordion";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger/AccordionTrigger";
import { AccordionContent } from "./AccordionContent/AccordionContent";

export default {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {},
} as Meta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Accordion> = (args: AccordionProps) => {
	return (
		<Accordion {...args}>
			<AccordionItem id={"item_1"}>
				<AccordionTrigger>Accordion Item .1</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nisl purus. Cras mauris diam,
					volutpat nec dolor id, viverra vestibulum orci. Aliquam sem velit, bibendum eget aliquam a, egestas
					id ante.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem id={"item_2"}>
				<AccordionTrigger>Accordion Item .2</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nisl purus. Cras mauris diam,
					volutpat nec dolor id, viverra vestibulum orci. Aliquam sem velit, bibendum eget aliquam a, egestas
					id ante.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem id={"item_3"}>
				<AccordionTrigger>Accordion Item .3</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nisl purus. Cras mauris diam,
					volutpat nec dolor id, viverra vestibulum orci. Aliquam sem velit, bibendum eget aliquam a, egestas
					id ante.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export const Default = Template.bind({});

Default.args = {};
