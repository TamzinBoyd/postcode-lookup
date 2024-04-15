import { FunctionComponent } from "react";
import AddressIcon from "./AddressIcon";
import AddressTitle from "./AddressTitle";
import AddressText from "./AddressText";
import { DataProps } from "../../types/types";

interface Address {
	address: DataProps;
	isLast: boolean;
	onClick?: () => void;
}
const AddressCard: FunctionComponent<Address> = ({
	address,
	isLast,
	onClick,
}) => {
	const { name, line1, town, county, postcode } = address.address;
	const formattedAddress = `${name}, ${line1}, ${town}, ${county}, ${postcode}`;

	return (
		<button
			className={`address-card flex items-center gap-4 py-1 w-full border-t border-black text-left hover:bg-gray-100 ${
				isLast && "border-b"
			}`}
			onClick={onClick}
			aria-label='Select address'
		>
			<AddressIcon />
			<div>
				<AddressTitle text={address.name} />
				<AddressText address={formattedAddress} />
			</div>
		</button>
	);
};

export default AddressCard;
