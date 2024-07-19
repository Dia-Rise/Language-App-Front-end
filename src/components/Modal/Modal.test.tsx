// Modal.test.tsx

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";

describe("<Modal />", () => {
	describe("prop: isOpen", () => {
		test(`If 'isOpen' is false, then the Modal should not render.`, () => {
			const text = "Modal content";
			render(
				<Modal isOpen={false} onClose={() => {}}>
					{text}
				</Modal>
			);

			expect(screen.queryByText(text)).not.toBeInTheDocument();
		});

		test(`If 'isOpen' is true, then Modal should appear as normal.`, () => {
			const text = "Modal content";
			render(
				<Modal isOpen={true} onClose={() => {}}>
					{text}
				</Modal>
			);

			expect(screen.queryByText(text)).toBeInTheDocument();
		});
	});

	describe(`prop: onClose`, () => {
		test(`'onClose is called when the 'close' button is clicked.`, async () => {
			const user = userEvent.setup();
			const mockFunc = jest.fn();
			render(
				<Modal isOpen={true} onClose={() => mockFunc()}>
					lorem ipsum
				</Modal>
			);

			await user.click(screen.getByRole("button"));

			expect(mockFunc).toHaveBeenCalledTimes(1);
		});
	});

	// describe(`prop: className`, () => {
	// 	test(`The 'className' given should be added to the classList of the base component.`, () => {
	// 		const testClass = "testClass";
	// 		const { container } = render(
	// 			<Modal className={testClass} isOpen={true} onClose={() => {}}>
	// 				lorem ipsum
	// 			</Modal>
	// 		);

	// 		expect(container.lastChild).toHaveClass(testClass);
	// 	});
	// });
});
