import { FunctionComponent, ChangeEvent } from "react";

interface Props {
	inputId?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	inputName: string;
	value: string;
	disabled?: boolean;
	type?: string;
	placeholder?: string;
}

const FormInput: FunctionComponent<Props> = ({
	inputId,
	onChange,
	inputName = "",
	value,
	disabled = false,
	type = "text",
	placeholder = "",
}) => {
	return (
		<input
			className='mb-1 p-4 bg-gray-200 h-12 w-full'
			id={inputId || inputName}
			name={inputName}
			type={type}
			onChange={onChange ? onChange : () => {}}
			value={value}
			disabled={disabled}
			placeholder={placeholder ? placeholder : '' }
		/>
	);
};

export default FormInput;
