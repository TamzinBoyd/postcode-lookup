import React, { FunctionComponent } from "react";

interface Props {
	isGift: boolean;
	setIsGift: React.Dispatch<React.SetStateAction<boolean>>;
}

const GiftSelect: FunctionComponent<Props> = ({ setIsGift, isGift }) => {
	return (
		<div className='gift-select flex justify-between mt-4'>
			<div>
				<p className='font-bold text-sm mb-1'>Is this a gift?</p>
				<p className='text-sm'>
					We'll hide the prices on their order form for you.
				</p>
			</div>
			<label className='relative inline-flex items-center'>
				<input
					type='checkbox'
					className='appearance-none form-checkbox h-6 w-6 cursor-pointer bg-gray-300'
					onChange={() => setIsGift(!isGift)}
					checked={isGift}
				/>

				{isGift && (
					<svg
						fill='#22822a'
						height='15px'
						width='15px'
						version='1.1'
						id='Capa_1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 490 490'
						className='absolute left-1'
					>
						<polygon points='452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 ' />
					</svg>
				)}
			</label>
		</div>
	);
};

export default GiftSelect;
