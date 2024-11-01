import classnames from "classnames";
import { ReactNode } from "react";

export type CircularProgressProps = {
	percent: number; //1 - 100
	children?: ReactNode;
	thickness?: number;
	size?: number;
	linecap?: "butt" | "round";
	className?: string;
};

export function CircularProgress({
	percent,
	children,
	thickness = 8,
	size = 64,
	linecap = "round",
	className,
}: CircularProgressProps) {
	const baseClassName = "circular-progress";
	const classNames = classnames(baseClassName, className);

	const thicknessCap = thickness < 1 ? 1 : thickness > size / 2 ? size / 2 : thickness;

	function caculateRadius(): number {
		return size / 2 - thicknessCap / 2;
	}

	function caculateProgressLength(): number {
		return 2 * Math.PI * caculateRadius();
	}

	function caculateProgressOffset(): number {
		const length = caculateProgressLength();
		const percentCap = percent < 1 ? 1 : percent > 100 ? 100 : percent;

		return length - (percentCap * length) / 100;
	}

	return (
		<div className={classNames} style={{ width: size, height: size }}>
			<svg className={`${baseClassName}__svg`} width={size} height={size}>
				<circle
					className={`${baseClassName}__track`}
					cx={"50%"}
					cy={"50%"}
					r={caculateRadius()}
					strokeWidth={thicknessCap}
					strokeLinecap={linecap}
					fill="transparent"
				/>
				<circle
					className={`${baseClassName}__gauge`}
					cx={"50%"}
					cy={"50%"}
					r={caculateRadius()}
					strokeWidth={thicknessCap}
					strokeLinecap={linecap}
					strokeDasharray={caculateProgressLength()}
					strokeDashoffset={caculateProgressOffset()}
					fill="transparent"
				/>
			</svg>
			<div className={classnames(`${baseClassName}__content`, className)}>{children}</div>
		</div>
	);
}
