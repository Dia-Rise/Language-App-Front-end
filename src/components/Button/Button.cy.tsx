import { mount } from "@cypress/react18";
import { Button, ButtonAppearance, ButtonColors, ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./Button";

const defaultProps: ButtonProps = {
	variant: ButtonVariant.Button,
	appearance: ButtonAppearance.Standard,
	onClick: () => {},
	children: "Lorem ipsum",
};

describe("BUTTON component", () => {
	describe("Props: className", () => {
		it("custom class should appear on component.", () => {
			const customClassname = "test-class";
			mount(<Button {...defaultProps} className={customClassname} />);
			cy.get("button").should("have.class", customClassname);
		});
	});

	describe("Props: variant", () => {
		describe("button element", () => {
			it("renders component as 'button'", () => {
				mount(<Button {...defaultProps} />);
				cy.get("button");
			});

			it("component should container a working 'onClick' function.", () => {
				const testFunction = cy.stub().as("testFunc");
				mount(<Button {...defaultProps} onClick={testFunction} />);

				cy.get("button").click();
				cy.get("@testFunc").should("have.been.called");
			});
		});

		describe("anchor element", () => {
			it("renders component as 'a'", () => {
				mount(
					<Button variant={ButtonVariant.Link} href="#">
						Lorem ipsum
					</Button>
				);
				cy.get("a");
			});

			it("component should container 'href'", () => {
				mount(
					<Button variant={ButtonVariant.Link} href="#">
						Lorem ipsum
					</Button>
				);
				cy.get("a").should("have.attr", "href");
			});
		});
	});

	describe("Props: color", () => {
		Object.keys(ButtonColors).forEach((current, index) => {
			it(`"component should contain the '${current}' class"`, () => {
				mount(<Button {...defaultProps} color={ButtonColors[current as keyof typeof ButtonColors]} />);
				cy.get("button").should("have.class", ButtonColors[current as keyof typeof ButtonColors]);
			});
		});
	});

	describe("Props: disabled", () => {
		it("component renders with disabled attribute", () => {
			mount(<Button {...defaultProps} disabled />);
			cy.get("button").should("be.disabled");
		});

		it("component renders with disabled class", () => {
			mount(<Button {...defaultProps} disabled />);
			cy.get("button").should("have.class", "button--disabled");
		});
	});

	// describe("Props: readOnly", () => {
	//     it("component renders with readOnly attribute", () => {});

	//     it("component renders with readOnly class", () => {});
	// });

	describe("Props: active", () => {
		it("component renders with active class", () => {
			mount(<Button {...defaultProps} active />);
			cy.get("button").should("have.class", "button--active");
		});
	});

	describe("Props: size", () => {
		Object.keys(ButtonSize).forEach((current, index) => {
			it(`"component should contain the '${current}' class"`, () => {
				mount(<Button {...defaultProps} size={ButtonSize[current as keyof typeof ButtonSize]} />);
				cy.get("button").should("have.class", ButtonSize[current as keyof typeof ButtonSize]);
			});
		});
	});

	describe("Props: shape", () => {
		Object.keys(ButtonShape).forEach((current, index) => {
			it(`"component should contain the '${current}' class"`, () => {
				mount(<Button {...defaultProps} shape={ButtonShape[current as keyof typeof ButtonShape]} />);
				cy.get("button").should("have.class", ButtonShape[current as keyof typeof ButtonShape]);
			});
		});
	});

	describe("Props: appearance", () => {
		Object.keys(ButtonAppearance).forEach((current, index) => {
			it(`"component should contain the '${current}' class"`, () => {
				mount(
					<Button
						variant={ButtonVariant.Button}
						onClick={() => {}}
						appearance={ButtonAppearance[current as keyof typeof ButtonAppearance]}
					>
						Lorem ipsum
					</Button>
				);

				if (ButtonAppearance[current as keyof typeof ButtonAppearance] === ButtonAppearance.Standard) {
					cy.get("button");
				} else {
					cy.get("button").should("have.class", ButtonAppearance[current as keyof typeof ButtonAppearance]);
				}
			});
		});
	});
});
