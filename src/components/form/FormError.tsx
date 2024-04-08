import { FunctionComponent } from "react";

interface Props {
	message: string;
}
const FormError: FunctionComponent<Props> = ({ message }) => {
	return <p className="text-red-600">{message}</p>;
};

export default FormError;
