import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import * as Yup from "yup";
import FormLabel from "./form/FormLabel";
import FormError from "./form/FormError";
import FormInput from "./form/FormInput";
import Button from "./Button";

export interface FormValues {
	name: string;
	surname: string;
	house: string;
	line1: string;
	line2: string;
	town: string;
	city: string;
	state: string;
	postcode: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	postcode: Yup.string()
		.required("Postcode is required")
		.required("Valid Post/Zip code is required"),
});

const ManualAddessForm: React.FC = () => {
	const [values, setValues] = useState<FormValues>({
		name: "",
		surname: "",
		house: "",
		line1: "",
		line2: "",
		town: "",
		city: "",
		state: "",
		postcode: "",
	});
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [successMessage, setSuccessMessage] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await validationSchema.validate(values, { abortEarly: false });
			setErrors({});
			setSuccessMessage(true);
		} catch (validationErrors: any) {
			const newErrors: { [key: string]: string } = {};
			validationErrors.inner.forEach((error: any) => {
				if (error.path) {
					newErrors[error.path] = error.message;
				}
			});
			setErrors(newErrors);
		}
	};

	useEffect(() => {
		if (successMessage) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [successMessage]);

	return (
		<form onSubmit={handleSubmit} className="manual-form">
			{successMessage && <p className="text-green-600 pb-4">Your address has been saved</p>}
			<div className='pb-5 flex flex-col'>
				<FormLabel text='Name' labelName='name' />
				<FormInput
					onChange={handleChange}
					inputName='name'
					value={values.name}
				/>
				{errors.name && <FormError message={errors.name} />}

				<FormLabel text='Surname' labelName='surname' />
				<FormInput
					inputName='surname'
					onChange={handleChange}
					value={values.surname}
				/>

				<FormLabel text='House number/flat' labelName='house' />
				<FormInput
					inputName='house'
					onChange={handleChange}
					value={values.house}
				/>

				<FormLabel text='Address line 1' labelName='line1' />
				<FormInput
					inputName='line1'
					onChange={handleChange}
					value={values.line1}
				/>

				<FormLabel text='Address line 2' labelName='line2' />
				<FormInput
					inputName='line2'
					onChange={handleChange}
					value={values.line2}
				/>

				<FormLabel text='Town/City' labelName='town' />
				<FormInput
					inputName='town'
					onChange={handleChange}
					value={values.town}
				/>

				<FormLabel text='State/Province' labelName='state' />
				<FormInput
					inputName='state'
					onChange={handleChange}
					value={values.state}
				/>

				<FormLabel text='Post/Zip code' labelName='postcode' />
				<FormInput
					onChange={handleChange}
					inputName='postcode'
					value={values.postcode}
				/>
				{errors.postcode && <FormError message={errors.postcode} />}
			</div>
			<Button type="submit" ariaLabel="Save Address">{"Save Address >"}</Button>
		</form>
	);
};

export default ManualAddessForm;
