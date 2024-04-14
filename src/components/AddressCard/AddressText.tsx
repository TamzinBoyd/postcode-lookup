import { FunctionComponent } from "react";
import Typography from "../typography/Typography";

interface Prrops {
	address: string;
}
const AddressText: FunctionComponent<Prrops> = ({ address }) => {
	return <Typography tag='p' classname="text-xs pr-4">{address}</Typography>;
};

export default AddressText;