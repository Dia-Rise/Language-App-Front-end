import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Icon, IconSize, IconSVG } from "./Icon";

describe("<Icon />", () => {
	describe("prop: svg", () => {
		test("SVG is rendered through the span", () => {
			const { container } = render(<Icon svg={IconSVG.Hiragana} size={IconSize.SM} />);
			const svg = container.querySelector("svg");

			expect(svg).toBeInTheDocument();
		});
	});
});
