import classnames from "classnames";
import { Icon, IconSVG, IconSize, Accordion } from "../../../components";
import { useQuiz } from "../../../hooks";
import { Languages } from "../../../enums";
import { AnswerResponseState } from "../../../layouts";

type QuizScreenResultsAccordionProps = {};

export function QuizScreenResultsAccordion({}: QuizScreenResultsAccordionProps) {
	const { questions, questionsResponses, isFinished } = useQuiz();

	function renderCorrectIncorrectIcon(isCorrect: boolean) {
		return (
			<Icon
				className={classnames(`${baseClassname}__icon`, {
					[`${baseClassname}__icon--correct`]: isCorrect,
					[`${baseClassname}__icon--incorrect`]: !isCorrect,
				})}
				svg={isCorrect ? IconSVG.Check_circle : IconSVG.Cross_circle}
				size={IconSize.LG}
			/>
		);
	}

	const baseClassname = "quiz-screen-results-accordion";
	const classNames = classnames(baseClassname);

	//TODO - Clean this up.
	return (
		<Accordion className={classNames}>
			{questions.map((current, index) => {
				const { state, givenAnswer, correctAnswers } = questionsResponses[index];

				return (
					<Accordion.Item className={`${baseClassname}__item`} id={`q_${index}`} readOnly>
						<Accordion.Trigger className={`${baseClassname}__trigger`} hasIcon={false}>
							{renderCorrectIncorrectIcon(state === AnswerResponseState.Correct)}
							<div className={`${baseClassname}__trigger-content`}>
								<span className={`${baseClassname}__question`}>
									{current.language === Languages.JP ? current.gana : current.content}
								</span>
								<span className={`${baseClassname}__given-answer`}>
									Your answer:{" "}
									{givenAnswer.language === Languages.EN ? givenAnswer.content : givenAnswer.gana}
								</span>
								{state !== AnswerResponseState.Correct && (
									<span className={`${baseClassname}__correct-answers`}>
										Correct {correctAnswers.length > 1 ? "answers" : "answer"}:{" "}
										{correctAnswers
											.map((current) =>
												current.language === Languages.EN ? current.content : current.gana
											)
											.join(", ")}
									</span>
								)}
							</div>
						</Accordion.Trigger>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}

{
	/* <div key={index} className={`${baseClassname}__accordion`}>
						<div className={`${classNames}__accordion-content`}>
							<span className={`${classNames}__accordion-question`}>{current.gana}</span>
							<span>Your answer: {answersGiven[index]}</span>
						</div>
						<div className={`${classNames}__accordion-actions`}>
							{correctAnswers[index].includes(answersGiven[index]) ? (
								<Icon
									className={`${baseClassname}__accordion-icon ${baseClassname}__accordion-icon--correct`}
									svg={IconSVG.Check_circle}
									size={IconSize.LG} />
							) : (
								<Icon
									className={`${baseClassname}__accordion-icon ${baseClassname}__accordion-icon--incorrect`}
									svg={IconSVG.Cross_circle}
									size={IconSize.LG} />
							)}
						</div>
					</div> */
}
