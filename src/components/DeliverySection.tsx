import Typography from "./typography/Typography";
import TabContainer from "./TabContainer";

const DeliverySection = () => {
	return (
		<div className='delivery flex justify-center py-16 bg-gray-200'>
			<div className='delivery__inner-container w-[596px] p-6 bg-white'>
				<Typography tag='h2' classname='font-bold text-2xl text-gray-600 mb-5'>
					Delivery Address:
				</Typography>
				<TabContainer />
			</div>
		</div>
	);
};

export default DeliverySection;
