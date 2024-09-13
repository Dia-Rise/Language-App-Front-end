import classnames from "classnames";
import {
	Button,
	ButtonAppearance,
	ButtonColors,
	ButtonShape,
	ButtonVariant,
	Icon,
	IconSize,
	IconSVG,
} from "../../../components";

const BASE_CLASSNAME = "answer-response-banner";

export enum AnswerResponseState {
	Correct = `${BASE_CLASSNAME}--correct`,
	Incorrect = `${BASE_CLASSNAME}--incorrect`,
	NetworkError = `${BASE_CLASSNAME}--network-error`,
}

export type AnswerResponseBannerProps = {
	state: AnswerResponseState;
	description?: string;
	onClickNextQuestion: () => void;
	onClickAbandonQuiz: () => void;
	className?: string;
};

export function AnswerResponseBanner({
	state,
	description,
	onClickNextQuestion,
	onClickAbandonQuiz,
	className,
}: AnswerResponseBannerProps) {
	const baseClassName = BASE_CLASSNAME;
	const classNames = classnames(baseClassName, state, className);

	function getStateIcon(): IconSVG {
		switch (state) {
			case AnswerResponseState.Correct:
				return IconSVG.Check_circle;
			case AnswerResponseState.Incorrect:
				return IconSVG.Cross_circle;
			case AnswerResponseState.NetworkError:
				return IconSVG.Info_circle;
		}
	}

	function getStateLabel(): string {
		switch (state) {
			case AnswerResponseState.Correct:
				return "Correct";
			case AnswerResponseState.Incorrect:
				return "Incorrect";
			case AnswerResponseState.NetworkError:
				return "An unknown error has occurred.";
		}
	}

	return (
		<div className={classNames}>
			<div className={`${baseClassName}__content`}>
				<span className={`${baseClassName}__label`}>
					<Icon svg={getStateIcon()} size={IconSize.LG} />
					{getStateLabel()}
				</span>

				{description && state !== AnswerResponseState.NetworkError && (
					<span className={`${baseClassName}__description`}>{description}</span>
				)}
			</div>
			<div className={`${baseClassName}__actions`}>
				<Button
					variant={ButtonVariant.Button}
					appearance={ButtonAppearance.Standard}
					shape={ButtonShape.Soft}
					color={ButtonColors.White}
					onClick={onClickNextQuestion}
				>
					Next Question
				</Button>

				{state === AnswerResponseState.NetworkError && (
					<Button
						variant={ButtonVariant.Button}
						appearance={ButtonAppearance.Standard}
						shape={ButtonShape.Soft}
						color={ButtonColors.Error}
						onClick={onClickAbandonQuiz}
					>
						Abandon Quiz
					</Button>
				)}
			</div>
		</div>
	);
}
