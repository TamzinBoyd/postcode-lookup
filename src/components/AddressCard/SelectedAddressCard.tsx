import { FunctionComponent } from "react";
import { DataProps } from "../CollectTab";
import Typography from "../typography/Typography";

interface Props {
	address: DataProps;
}
const SelectedAddressCard: FunctionComponent<Props> = ({ address }) => {
	const { name, line1, town, county, postcode } = address.address;

	return (
		<div className="selected-address__card mb-4">
			<Typography tag='p' classname='font-bold mb-1'>
				{address.name}
			</Typography>
			<p className="text-xs leading-normal">{name},</p>
			<p className="text-xs leading-normal">{line1},</p>
            <p className="text-xs leading-normal">{town},</p>
            <p className="text-xs leading-normal">{county},</p>
            <p className="text-xs leading-normal">{postcode}</p>
		</div>
	);
};

export default SelectedAddressCard;
