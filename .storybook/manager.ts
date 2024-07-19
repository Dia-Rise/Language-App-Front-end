import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import customTheme from "./theme";

addons.setConfig({
	theme: customTheme,
});
