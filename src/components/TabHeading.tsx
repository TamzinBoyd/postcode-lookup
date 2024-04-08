import { FunctionComponent } from "react";
import Typography from "./typography/Typography";
import { TabOptions } from "./TabContainer";

interface Props {
	text: TabOptions;
	isSelected: boolean;
	onClick: () => void;
	wrapperClass?: string;
}
const TabHeading: FunctionComponent<Props> = ({
	text,
	wrapperClass,
	isSelected,
	onClick,
}) => {
	return (
		<button
			className={`${wrapperClass} w-3/6 p-3 ${
				isSelected ? "border-t border-gray-700" : ""
			}`}
			aria-label={`Select ${text}`}
			onClick={onClick}
		>
			<Typography
				tag='h6'
				classname={`text-xl font-bold ${
					isSelected ? "text-gray-700" : "text-gray-400"
				}`}
			>
				{text}
			</Typography>
		</button>
	);
};

export default TabHeading;
