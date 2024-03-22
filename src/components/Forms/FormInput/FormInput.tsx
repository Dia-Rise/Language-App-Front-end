import { ChangeEvent, ReactNode } from "react";

export enum FormInputType {
	Text = "text",
	Password = "password",
	Email = "email",
}

export enum FormInputState {
	default = "",
	error = "form-input--error",
	warning = "form-input--warning",
	success = "form-input--success",
	info = "form-input--info",
}

export type FormInputProps = {
	label: string;
	value: string;
	state?: FormInputState;
	type?: FormInputType;
	disabled?: boolean;
	readOnly?: boolean;
	onChange: (newValue: string) => void;
	className?: string;
};

export function FormInput({
	value,
	disabled,
	state = FormInputState.default,
	type = FormInputType.Text,
	onChange,
	className = "",
}: FormInputProps) {
	return (
		<div className={`form-input ${state} ${disabled ? "form-input--disabled" : ""} ${className}`}>
			<input
				className={`form-input__input`}
				{...{ type, value }}
				onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => onChange(value)}
			/>
		</div>
	);
}
