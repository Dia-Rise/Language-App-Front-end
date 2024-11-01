import classnames from "classnames";
import { Spinner } from "../../../components";

type QuizScreenLoadingProps = {};

export function QuizScreenLoading({}: QuizScreenLoadingProps) {
	const baseClassname = "quiz-screen-loading";
	const classNames = classnames(baseClassname);

	return (
		<div className={classNames}>
			<Spinner />
		</div>
	);
}
