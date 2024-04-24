export type SpinnerProps = {
	className?: string;
};

export function Spinner({ className = "" }: SpinnerProps) {
	return <div className={`spinner ${className}`}></div>;
}
