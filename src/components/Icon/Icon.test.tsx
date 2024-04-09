import { render } from "@testing-library/react";
import { Icon, IconSize, IconSVG } from "./Icon";

describe("<Icon />", () => {
	describe("prop: svg", () => {
		test("SVG is rendered through the span", () => {
			const { baseElement } = render(<Icon svg={IconSVG.Hiragana} size={IconSize.SM} />);
			const element = document.querySelector("svg");

			expect(baseElement).toContain(element);
		});
	});
});
