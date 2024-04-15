import React, { FunctionComponent } from "react";
import FormLabel from "./form/FormLabel";
import FormInput from "./form/FormInput";
import { DataProps } from "./CollectTab";
import Button from "./Button";

interface Props {
	handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	selectedAddress: DataProps | null;
}
const PostalForm: FunctionComponent<Props> = ({
	handleFormSubmit,
	selectedAddress,
}) => {
	if (!selectedAddress) return null;

	return (
		<div className='postal-form pt-4'>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
					handleFormSubmit(e)
				}
			>
				<FormLabel text='Name:' labelName='firstName' />
				<FormInput inputName='firstName' classes='mb-3' />
				<FormLabel text='Surname:' labelName='surname' />
				<FormInput inputName='surname' classes='mb-3' />
				<FormLabel text='Address line 1:' labelName='house' />
				<FormInput
					inputName='house'
					value={selectedAddress?.address.name || ""}
					classes='mb-3'
					disabled
				/>
				<FormLabel text='Address Line 2:' labelName='line2' />
				<FormInput
					inputName='line2'
					value={selectedAddress?.address.line1 || ""}
					classes='mb-3'
					disabled
				/>
				<FormLabel text='City:' labelName='city' />
				<FormInput
					inputName='city'
					value={selectedAddress?.address.county || ""}
					classes='mb-3'
					disabled
				/>
				<FormLabel text='Postcode:' labelName='postcode' />
				<FormInput
					inputName='postcode'
					value={selectedAddress?.address.postcode || ""}
					classes='mb-8'
					disabled
				/>
				<Button type='submit' ariaLabel='Save Address' classes='h-12'>
					{"Save Address >"}
				</Button>
			</form>
		</div>
	);
};

export default PostalForm;
