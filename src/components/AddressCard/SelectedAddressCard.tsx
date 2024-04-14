import { FunctionComponent } from "react";
import { DataProps } from "../CollectTab";
import Typography from "../typography/Typography";

interface Props {
	address: DataProps;
}
const SelectedAddressCard: FunctionComponent<Props> = ({ address }) => {
	const { name, line1, town, county, postcode } = address.address;

	return (
		<div className="mb-4">
			<Typography tag='p' classname='font-bold mb-2'>
				{address.name}
			</Typography>
			<p className="text-xs">{name},</p>
			<p className="text-xs">{line1},</p>
            <p className="text-xs">{town},</p>
            <p className="text-xs">{county},</p>
            <p className="text-xs">{postcode}</p>
		</div>
	);
};

export default SelectedAddressCard;
