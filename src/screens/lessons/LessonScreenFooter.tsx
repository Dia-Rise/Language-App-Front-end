import classnames from "classnames";
import { useLessons } from "../../hooks";
import { Button, ButtonColors, ButtonVariant } from "../../components";

export function LessonScreenFooter() {
	const { nextSlide } = useLessons();

	const baseClassname = "lesson-screen-footer";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<Button
				className={`${baseClassname}__action`}
				variant={ButtonVariant.Button}
				// disabled
				color={ButtonColors.Black}
				onClick={() => {
					console.log("clicked");
					nextSlide();
				}}
			>
				Continue
			</Button>
		</div>
	);
}
