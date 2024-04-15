import React, { FunctionComponent, useState } from "react";
import ManualAddressForm from "./ManualAddressForm";
import GiftSelect from "./GiftSelect";
import { addressSearch } from "../services/addressSearch";
import PostCodeSearch from "./PostCodeSearch";
import AddressDropdown from "./AddressDropdown";
import PostalForm from "./PostalForm";

import { DataProps } from "../types/types";

const PostalTab: FunctionComponent = () => {
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);
	const [manualOpen, setManualOpen] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [isGift, setIsGift] = useState(false);

	const [postcode, setPostcode] = useState("");
	const [data, setData] = useState<DataProps[] | null>(null);
	const [selectedAddress, setSelectedAddress] = useState<DataProps | null>(
		null,
	);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const fetchAddressess = () => {
		addressSearch(postcode)
			.then((responseData) => {
				if (responseData.length > 0) {
					setData(responseData);
					setShowError(false);
				} else {
					setShowError(true);
					setError("No results found");
				}
			})
			.catch((error) => {
				setError(error.message);
				setShowError(true);
			});
	};

	const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPostcode(e.target.value);
	};

	const handlePostcodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			postcodeInput: HTMLInputElement;
		};
		const postcode = target.postcodeInput.value.trim();

		if (!postcode) {
			setError("Please enter a postcode");
			setShowError(true);
			return;
		}

		fetchAddressess();
		setDropdownOpen(true);
	};

	const handleAddressClick = (address: DataProps) => {
		setSelectedAddress(address);
		setDropdownOpen(false);
		setShowForm(true);
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(true);
		const formData = new FormData(e.target as HTMLFormElement);
		const completeForm = {
			firstName: formData.get("firstName"),
			lastName: formData.get("surname"),
			address: selectedAddress,
			isGift
		}
		console.log("Form submitted:", completeForm);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<div className='postal-tab__container pt-10'>
			{formSubmitted && <p className='text-green-500 mb-2'>Form submitted successfully!</p>}

			{!manualOpen && (
				<>
					<PostCodeSearch
						label='Enter postcode'
						handleSubmit={handlePostcodeSubmit}
						handleInputChange={handlePostcodeChange}
						postcode={postcode}
						buttonText='Look up address >'
						showManualLink={true}
						handleManualFormClick={() => setManualOpen(true)}
					/>
					{dropdownOpen && data && (
						<AddressDropdown
							handleAddressClick={handleAddressClick}
							addresses={data}
						/>
					)}
					{showError && <p className='text-red-500 mt-2 text-sm'>{error}</p>}
				</>
			)}

			{manualOpen && <ManualAddressForm />}

			{showForm && !manualOpen && (
				<PostalForm handleFormSubmit={handleFormSubmit} selectedAddress={selectedAddress} />
			)}
			<GiftSelect setIsGift={setIsGift} isGift={isGift} />
		</div>
	);
};

export default PostalTab;
