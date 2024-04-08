import { FunctionComponent, ChangeEvent } from "react";

interface Props {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	inputName: string;
	value: string;
	disabled?: boolean;
}

const FormInput: FunctionComponent<Props> = ({
	onChange,
	inputName = "",
	value,
	disabled = false
}) => {
	return (
		<input
			className='mb-1 p-4 bg-gray-200 h-12 w-full'
			id={inputName}
			name={inputName}
			type='text'
			onChange={onChange ? onChange : () => {}}
			value={value}
			disabled={disabled}
		/>
	);
};

export default FormInput;
