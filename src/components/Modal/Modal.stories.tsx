import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { Position } from "../../enums";

export default {
	title: "Components/Modal",
	component: Modal,
} as Meta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args: ModalProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<>
			<button onClick={() => setVisible(true)}>Spawn modal</button>
			<Modal {...args} isOpen={visible} onClose={() => setVisible(false)}>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum, ipsum eget semper
						commodo, nulla risus dignissim lectus, et consequat justo ipsum eget nisi. Maecenas eget iaculis
						est. Cras consequat orci quis velit pellentesque tincidunt. Nunc eleifend nisi eu est suscipit
						consequat. Sed urna nisl, porta ac mi et, mattis facilisis dolor. Aenean vehicula scelerisque
						convallis. Sed sapien elit, consectetur non lectus eu, laoreet vestibulum urna. Sed dictum lorem
						ex, non egestas erat finibus at.
					</p>
					<p>
						Vivamus vel orci mi. Sed vel felis a arcu fermentum elementum. Aenean convallis magna eu
						scelerisque dapibus. Nam lacinia sodales justo vel tempus. Aliquam mattis fermentum congue.
						Donec id bibendum nunc. Donec tempus rutrum nisi eu imperdiet. Nulla facilisis sem ut mollis
						suscipit. Phasellus nec facilisis orci. Morbi facilisis quam et augue fermentum lobortis.
						Vestibulum et tempus risus, ut varius sem. Maecenas cursus lobortis scelerisque. Nullam interdum
						dictum elit quis elementum. Pellentesque posuere viverra elit nec sagittis.
					</p>
					<p>
						Sed ornare sapien nibh, sed porta velit tristique eget. Mauris quis dui augue. Vivamus faucibus
						ullamcorper nibh, sed tincidunt orci sollicitudin nec. Pellentesque placerat eros lorem, eu
						posuere enim dignissim nec. Nunc vel sodales elit, suscipit aliquam turpis. Sed finibus eros
						nunc, a tincidunt ipsum varius ut. Praesent mauris tortor, rutrum vitae varius quis,
						sollicitudin nec ante. Fusce eget justo dui. Integer augue purus, vestibulum mattis velit in,
						rhoncus blandit eros. Donec quis vulputate metus, non auctor nisl. Donec ac tincidunt velit. Nam
						venenatis posuere lectus eget efficitur. Etiam pellentesque luctus nulla, sit amet condimentum
						erat euismod quis. Donec dapibus sapien justo, in tempus quam tristique ve l.
					</p>
				</div>
			</Modal>
		</>
	);
};

export const Default = Template.bind({});

Default.args = {
	position: Position.TopRight,
};
