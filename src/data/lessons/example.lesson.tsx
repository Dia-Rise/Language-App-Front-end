import React, { ReactNode } from "react";
import { useLessons } from "../../hooks";
import { Button, ButtonVariant } from "../../components";

// const { slideCount } = useLessons();
export type LessonSlideType = {
	title?: string;
	content: ReactNode | ReactNode[];
	// completionCondition?: () => boolean;
};

//TODO - FIGURE OUT ANIMATION
export const exampleLesson: LessonSlideType[] = [
	{
		content: (
			<>
				<p>Basic Conjugation</p>
				<h2>Masu (ます) 1 Form</h2>
			</>
		),
	},
	{
		content: (
			<>
				<p>Basic Conjugation</p>
				<h2>Masu (ます) 2 Form</h2>
			</>
		),
	},
	{
		content: (
			<>
				<p>Basic Conjugation</p>
				<h2>Masu (ます) 3 Form</h2>
			</>
		),
	},
];

// export const exampleLesson = [
// 	{
// 		title: "lorem ipsum",
// 		content: (step: number, interactiveCallback: () => void) => <>{step}</>,
// 	},
// ];
