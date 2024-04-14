import { useState } from "react";
import { addressSearch } from "../services/addressSearch";
import CollectModal from "./CollectModal";
import PostCodeSearch from "./PostCodeSearch";

export interface AddressProp {
	county: string;
	line1: string;
	name: string;
	postcode: string;
	town: string;
}

export interface DeliveryOption {
	description: string;
	name: string;
	price: string;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface OpeningTimes {
	Mon: string;
	Tues: string;
	Wed: string;
	Thurs: string;
	Fri: string;
	Sat: string;
	Sun: string;
}

export interface DataProps {
	address: AddressProp;
	delivery_options: DeliveryOption[];
	location: Location;
	name: string;
	opening_times: OpeningTimes;
}

const CollectTab = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);
	const [postcode, setPostcode] = useState("");
	const [data, setData] = useState(null);

	const fetchAddressess = () => {
		addressSearch(postcode)
			.then((responseData) => {
				if (responseData.length > 0) {
					setData(responseData);
					setShowError(false);
					setModalOpen(true);
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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPostcode(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {postcodeInput: HTMLInputElement};
		const postcode = target.postcodeInput.value.trim();

		if (!postcode) {
			setError("Please enter a postcode");
			setShowError(true);
			return;
		}

		fetchAddressess();
	};

	return (
		<div className='collect-tab__container pt-10'>
			<PostCodeSearch
				label='Find your nearest collection point'
				handleSubmit={handleSubmit}
				handleInputChange={handleInputChange}
				postcode={postcode}
			/>

			{showError && <p className='text-red-500 mt-2'>{error}</p>}

			{modalOpen && (
				<CollectModal
					handleSubmit={handleSubmit}
					handleInputChange={handleInputChange}
					closeModal={() => setModalOpen(false)}
					postcode={postcode}
					data={data}
					error={error}
					showError={showError}
				/>
			)}
		</div>
	);
};

export default CollectTab;