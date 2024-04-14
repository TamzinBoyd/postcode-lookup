import { FunctionComponent } from "react";
import Close from "../../assets/Close";
import Typography from "../typography/Typography";

interface Props {
	closeModal: () => void;
}

const CloseModal: FunctionComponent<Props> = ({ closeModal }) => {
	return (
		<button onClick={closeModal} aria-label='Close modal' className="absolute flex gap-1 right-4 top-4 z-10">
			<Typography tag="p" classname="text-lg font-bold">Close</Typography>
			<Close />
		</button>
	);
};

export default CloseModal;