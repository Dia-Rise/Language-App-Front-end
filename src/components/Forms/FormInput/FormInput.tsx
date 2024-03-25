import { ChangeEvent, useState } from "react";
import { InputLabel } from "../InputLabel/InputLabel";
import classnames from "classnames";

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
	id: string;
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
	id,
	value,
	label,
	disabled,
	readOnly,
	state = FormInputState.default,
	type = FormInputType.Text,
	onChange,
	className = "",
}: FormInputProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const baseClassName = `form-input`;
	const focusedClassName = isFocused && "form-input--focused";
	const disabledClassName = disabled && "form-input--disabled";
	const readOnlyClassName = readOnly && "form-input--read-only";
	const classNames = classnames(
		baseClassName,
		state,
		focusedClassName,
		disabledClassName,
		readOnlyClassName,
		className
	);

	return (
		<div className={classNames}>
			<InputLabel className={`${baseClassName}__label`} value={label} htmlFor={id} />
			<input
				className={`${baseClassName}__input`}
				{...{ id, type, value, disabled, readOnly }}
				onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => onChange(value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</div>
	);
}
