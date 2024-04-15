import { useState } from "react";
import { addressSearch } from "../services/addressSearch";
import CollectModal from "./CollectModal";
import PostCodeSearch from "./PostCodeSearch";
import { DataProps } from "../types/types";

const CollectTab = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);
	const [postcode, setPostcode] = useState("");
	const [data, setData] = useState<DataProps[] | null>(null);

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
				buttonText="Search >"
			/>

			{showError && <p className='text-red-500 mt-2 text-sm'>{error}</p>}

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
