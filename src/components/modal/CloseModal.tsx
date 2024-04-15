import { FunctionComponent } from "react";
import Close from "../../assets/Close";
import Typography from "../typography/Typography";

interface Props {
	closeModal: () => void;
}

const CloseModal: FunctionComponent<Props> = ({ closeModal }) => {
	return (
		<button onClick={closeModal} aria-label='Close modal' className="absolute z-10 flex gap-2 items-center right-4 top-2 md:top-4 hover:text-gray-7800">
			<Typography tag="p" classname="text-lg font-bold">Close</Typography>
			<Close />
		</button>
	);
};

export default CloseModal;