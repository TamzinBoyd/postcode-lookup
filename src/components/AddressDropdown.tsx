import { FunctionComponent } from "react";
import { DataProps } from "../types/types";

interface Props {
	addresses: DataProps[];
	handleAddressClick: (addres: DataProps) => void;
}
const AddressDropdown: FunctionComponent<Props> = ({
	addresses,
	handleAddressClick,
}) => {
	return (
		<div className='address-dropdown relative z-10'>
			<div className='absolute bg-white w-full shadow-lg rounded mt-1'>
				<ul className=" max-h-64 overflow-auto">
					{addresses?.map((address, index) => (
						<li
							className='p-2 cursor-pointer hover:bg-gray-100'
							onClick={() => handleAddressClick(address)}
							key={index}
						>
							{address.name}, {address.address.line1}, {address.address.county}, {address.address.postcode}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AddressDropdown;
