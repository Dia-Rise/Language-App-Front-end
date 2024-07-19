# Japanese Language App.

This app is designed as a resource for me to study japanese.
I add features and information as I continue to learn the language, so the information present may not be 100% correct.

# Setup

npm install

node version 17+ is required to run Storybook 8.0.0

# Commands

Runs the app on Vite.

-   npm run dev

Runs Storybook to view all the components and layouts.

-   npm run storybook

Run while developing app. Refators code on every save to keep all files looking consistant.

-   npm run prettier:watch

Run while developing app. Performs a indept TypeScript check on every save. Any type, syntax, etc errors will be reported here.

-   npm run tscheck

Runs Jest. Runs all .test files within the app. This is done to ensure that the app's behavour/functionality stays consistant throughout any chanages.

-   npm run test


# Design

The design can be found on this [figma](https://www.figma.com/design/rCsXECUrbAUIvtOfHgSceF/Language-app?node-id=26-2&t=ATEReCBgnsGn7dL2-1).


Below is the default ReadMe.md text provided by Vite.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
