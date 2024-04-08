import { FunctionComponent } from "react";

interface Props {
	text: string;
	labelName: string;
}
const FormLabel: FunctionComponent<Props> = ({ labelName = "", text = "" }) => {
	return <label htmlFor={labelName}>{text}</label>;
};

export default FormLabel;
