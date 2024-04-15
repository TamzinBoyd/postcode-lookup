import { FunctionComponent, useState } from "react";
import { DeliveryOption } from "./CollectTab";
import Typography from "./typography/Typography";
import Button from "./Button";

interface Props {
	option: DeliveryOption;
	closeModal: () => void;
}

const DeliveryOptionCard: FunctionComponent<Props> = ({
	option,
	closeModal,
}) => {
	// Store selected option, would feed this into a form submit
	const [selectedOption, setSelectedOption] = useState(option);

	const priceToNumber = parseFloat(option.price.split("£")[1]);
	const formattedPrice = priceToNumber.toFixed(2);

	const handleSelect = () => {
		setSelectedOption(option);
		closeModal();
	};

	return (
		<div className='delivery-option__card px-8 p-6 md:pt-0 border-t-2 md:border-l-2 md:border-t-0 border-black'>
			<p
				className='font-bold'
				dangerouslySetInnerHTML={{ __html: option.name }}
			></p>
			<Typography tag='p' classname='text-xs mb-2'>
				{option.description}
			</Typography>
			<Typography tag='p' classname='font-bold mb-2'>
				£{formattedPrice}
			</Typography>
			<Button
				type='button'
				ariaLabel='Select delivery option'
				onClick={handleSelect}
			>
				{"Select >"}
			</Button>
		</div>
	);
};

export default DeliveryOptionCard;
