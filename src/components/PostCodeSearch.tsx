import React, { FunctionComponent } from "react";
import FormInput from "./form/FormInput";
import Button from "./Button";
import Typography from "./typography/Typography";

interface Props {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	postcode: string;
    label: string;
}
const PostCodeSearch: FunctionComponent<Props> = ({
	handleSubmit,
	handleInputChange,
	postcode,
    label,
}) => {
	return (
		<>
			<Typography tag='p' classname="font-bold mb-2">{label}</Typography>
			<form onSubmit={handleSubmit} className='flex h-12'>
				<label htmlFor='postcodeInput' className='hidden'>
					Postcode address search
				</label>
				<FormInput
					inputId='postcodeInput'
					type='text'
					onChange={handleInputChange}
					inputName='postcodeInput'
					value={postcode}
					placeholder='Enter your postcode'
				/>
				<Button type='submit' ariaLabel='Search' classes='h-12'>
					{"Search >"}
				</Button>
			</form>
		</>
	);
};

export default PostCodeSearch;
