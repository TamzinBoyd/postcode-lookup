import React, { FunctionComponent, useEffect, useState } from "react";
import Modal from "./modal/Modal";
import { DataProps } from "./CollectTab";
import Typography from "./typography/Typography";
import PostCodeSearch from "./PostCodeSearch";
import AddressCard from "./AddressCard/AddressCard";
import SelectedAddressCard from "./AddressCard/SelectedAddressCard";
import DeliveryOptionCard from "./DeliveryOptionCard";
import OpeningTimesCard from "./OpeningTimesCard";

interface Props {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
	postcode: string;
	data: DataProps[] | null;
}
const CollectModal: FunctionComponent<Props> = ({
	handleSubmit,
	handleInputChange,
	closeModal,
	postcode = "",
	data,
}) => {
	const [selectedAddress, setSelectedAddress] = useState<DataProps | null>(null);

	useEffect(() => {
		if (data && data.length > 0) {
			setSelectedAddress(data[0]);
		}
	}, [data]);

	return (
		<Modal closeModal={() => closeModal(false)}>
			<div className='flex gap-12 max-h-[550px]'>
				<div className='max-w-[400px]'>
					<Typography tag='h4' classname='font-bold text-lg mb-4'>
						Click & Collect
					</Typography>
					<PostCodeSearch
						label={`${data?.length} results for:`}
						handleSubmit={handleSubmit}
						handleInputChange={handleInputChange}
						postcode={postcode}
					/>
					<div className='mt-8 max-h-[400px] overflow-y-scroll'>
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
					map here
					<div className='flex gap-8'>
						{selectedAddress && (
							<>
								<div className='flex flex-col'>
									<SelectedAddressCard
										address={selectedAddress}
									/>
									<OpeningTimesCard
										times={selectedAddress.opening_times}
									/>
								</div>
								<div className="max-h-[500px] overflow-auto">
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
