import React, { FunctionComponent, useState } from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
} from "react-places-autocomplete";
import ManualAddressForm from "./ManualAddressForm";
import GiftSelect from "./GiftSelect";
import FormLabel from "./form/FormLabel";
import FormInput from "./form/FormInput";

const PostalTab: FunctionComponent = () => {
	const [address, setAddress] = useState("");
	const [selectedAddress, setSelectedAddress] = useState({
		address_line_1: "",
		address_line_2: "",
		city: "",
		postcode: "",
	});
	const [isError, setIsError] = useState(false);
	const [manualOpen, setManualOpen] = useState(false);
	const [isGift, setIsGift] = useState(false);

	const handleSelect = async (value: string) => {
		setIsError(false);
		const results = await geocodeByAddress(value);
		const addressComponents = results[0].address_components;
		const formattedAddress = {
			address_line_1:
				addressComponents[0]?.long_name ??
				"" + " " + addressComponents[1]?.long_name ??
				"",
			address_line_2: addressComponents[2]?.long_name ?? "",
			city: addressComponents[3]?.long_name ?? "",
			postcode:
				addressComponents[addressComponents.length - 1]?.short_name ??
				"",
		};
		setSelectedAddress(formattedAddress);
		setAddress(value);
	};

	return (
		<div className='postal-tab__container pt-10'>
			{!manualOpen && (
				<div>
					<PlacesAutocomplete
						value={address}
						onChange={setAddress}
						onSelect={handleSelect}
						onError={(status, clearSuggestions) => {
							clearSuggestions();
							setIsError(status !== "OK");
						}}
					>
						{({
							getInputProps,
							suggestions,
							getSuggestionItemProps,
							loading,
						}) => (
							<div>
								<p className='text-lg font-bold text-gray-700 mb-4'>
									Enter address
								</p>
								<input
									{...getInputProps({
										placeholder: "Type address",
									})}
									className='w-full h-14 p-3 mb-4 bg-gray-200 rounded-sm'
								/>

								<div>
									{loading ? <div>...loading</div> : null}

									{suggestions.map((suggestion, index) => (
										<div
											{...getSuggestionItemProps(
												suggestion,
											)}
											key={index}
										>
											{suggestion.description}
										</div>
									))}

									{isError && <p>Address not found</p>}
								</div>
							</div>
						)}
					</PlacesAutocomplete>
					<button
						onClick={() => setManualOpen(true)}
						className='mb-8 underline font-bold text-sm text-gray-500 hover:text-blue-500'
					>
						{"Enter address manually >"}
					</button>
				</div>
			)}

			{manualOpen ? (
				<ManualAddressForm />
			) : (
				<div>
					<form>
						<FormLabel text='Address line 1:' labelName='house' />
						<FormInput
							inputName='house'
							value={selectedAddress.address_line_1}
							disabled
						/>

						<FormLabel text='Address Line 2:' labelName='line2' />
						<FormInput
							inputName='line2'
							value={selectedAddress.address_line_2}
							disabled
						/>

						<FormLabel text='City:' labelName='city' />
						<FormInput
							inputName='city'
							value={selectedAddress.city}
							disabled
						/>

						<FormLabel text='Postcode:' labelName='postcode' />
						<FormInput
							inputName='postcode'
							value={selectedAddress.postcode}
							disabled
						/>
					</form>
				</div>
			)}
			<GiftSelect setIsGift={setIsGift} isGift={isGift} />
		</div>
	);
};

export default PostalTab;
