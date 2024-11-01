import classnames from "classnames";

export type SegmentsProps = {
	amount: number;
	amountCompleted: number;
	className?: string;
};

//? May rename this component later.
export function Segments({ amount, amountCompleted, className }: SegmentsProps) {
	const baseClassName = "segments";
	const classNames = classnames(baseClassName, className);

	return (
		<div className={classNames}>
			{Array.from(Array(amount), (_e, index) => (
				<span
					key={index}
					className={classnames(`${baseClassName}__segment`, {
						[`${baseClassName}__segment--completed`]: index + 1 <= amountCompleted,
						[`${baseClassName}__segment--pending`]: index + 1 === amountCompleted + 1,
					})}
				/>
			))}
		</div>
	);
}
