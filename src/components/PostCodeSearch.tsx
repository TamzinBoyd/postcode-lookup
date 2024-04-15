import React, { FunctionComponent } from "react";
import FormInput from "./form/FormInput";
import Button from "./Button";
import Typography from "./typography/Typography";

interface Props {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	postcode: string;
	label: string;
	buttonText: string;
	showManualLink?: boolean;
	handleManualFormClick?: () => void;
}
const PostCodeSearch: FunctionComponent<Props> = ({
	handleSubmit,
	handleInputChange,
	postcode,
	label,
	buttonText,
	showManualLink = false,
	handleManualFormClick,
}) => {
	return (
		<div className="postcode-search">
			<Typography tag='p' classname='font-bold mb-2'>
				{label}
			</Typography>
			<form
				onSubmit={handleSubmit}
				className={`flex items-start ${showManualLink && "flex-col"}`}
			>
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
				{showManualLink && (
					<button
						type='button'
						onClick={handleManualFormClick}
						aria-label='Open manual address form'
						className='underline text-xs hover:text-gray-500 mt-2 mb-6'
					>
						{"Enter address manually >"}
					</button>
				)}
				<Button type='submit' ariaLabel='Search' classes='h-12'>
					{buttonText}
				</Button>
			</form>
		</div>
	);
};

export default PostCodeSearch;
