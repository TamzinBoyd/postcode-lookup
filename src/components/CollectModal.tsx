import React, { FunctionComponent, useEffect, useState } from "react";
import Modal from "./modal/Modal";
import { DataProps } from "./CollectTab";
import Typography from "./typography/Typography";
import PostCodeSearch from "./PostCodeSearch";
import AddressCard from "./AddressCard/AddressCard";
import SelectedAddressCard from "./AddressCard/SelectedAddressCard";
import DeliveryOptionCard from "./DeliveryOptionCard";
import OpeningTimesCard from "./OpeningTimesCard";
import MapComponent from "./Map";

interface Props {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
	postcode: string;
	data: DataProps[] | null;
	error: string;
	showError: boolean;
}
const CollectModal: FunctionComponent<Props> = ({
	handleSubmit,
	handleInputChange,
	closeModal,
	postcode = "",
	data,
	error = "",
	showError = false,
}) => {
	const [selectedAddress, setSelectedAddress] = useState<DataProps | null>(null);

	useEffect(() => {
		if (data && data.length > 0) {
			setSelectedAddress(data[0]);
		}
	}, [data]);

	return (
		<Modal closeModal={() => closeModal(false)}>
			<div className='collect-modal flex flex-col md:flex-row gap-2 md:gap-12 h-fit md:max-h-[1000px] pt-4 md:p-0'>
				<div className='md:max-w-[400px]'>
					<Typography tag='h4' classname='font-bold text-lg mb-4'>
						Click & Collect
					</Typography>
					<PostCodeSearch
						label={`${data?.length} results for:`}
						handleSubmit={handleSubmit}
						handleInputChange={handleInputChange}
						postcode={postcode}
						buttonText="Search >"
					/>
					{showError && <p className='text-red-500 mt-2'>{error}</p>}

					<div className='addresses mt-6 pr-2 md:max-h-[450px] overflow-y-scroll'>
						{data?.map((address, index) => (
							<AddressCard
								address={address}
								key={index}
								isLast={index === data.length - 1}
								onClick={() => setSelectedAddress(address)}
							/>
						))}
					</div>
				</div>
				<div className=''>
					{selectedAddress && <MapComponent location={selectedAddress?.location}/>}
					<div className='flex flex-col md:flex-row gap-8'>
						{selectedAddress && (
							<>
								<div className='flex flex-col min-w-48'>
									<SelectedAddressCard
										address={selectedAddress}
									/>
									<OpeningTimesCard
										times={selectedAddress.opening_times}
									/>
								</div>
								<div className="md:max-h-[300px] overflow-auto">
									{selectedAddress.delivery_options.map(
										(option, index) => (
											<DeliveryOptionCard
												key={index}
												option={option}
												closeModal={() =>
													closeModal(false)
												}
											/>
										),
									)}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default CollectModal;
