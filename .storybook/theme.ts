import { create } from "@storybook/theming/create";
// import logo from "./assets/imgs/logo.svg";

export default create({
	base: "light",
	brandTitle: "Language App",

    fontBase: '"Inter", sans-serif',
	fontCode: "monospace",

    colorPrimary: "#ff8a00",
	colorSecondary: "#ff8a00",

    appBg: "#ffffff",
	appContentBg: "#ffffff",
	appBorderColor: "#d7e0df",
	appBorderRadius: 0,

    textColor: "#485c5b",
	textInverseColor: "#f6f8f8",

});