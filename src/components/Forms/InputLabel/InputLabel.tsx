export type InputLabelProps = {
	value: string;
	htmlFor: string;
	className?: string;
};

export function InputLabel({ value, htmlFor, className }: InputLabelProps) {
	return (
		<label className={`input-label ${className}`} {...{ htmlFor }}>
			{value}
		</label>
	);
}
