import type { Preview } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/scss/main.scss";

export const decorators = [
	(Story, context) => {
		return (
			<Router>
				<Story />
			</Router>
		);
	},
];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
