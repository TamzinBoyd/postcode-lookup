import React, { FunctionComponent } from "react";
import CloseModal from "./CloseModal";

interface ModalProps {
	closeModal: () => void;
	children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ closeModal, children }) => {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50'>
			<div className='relative max-w-5xl mx-auto'>
				<div
					className='absolute inset-0'
					onClick={closeModal}
					aria-hidden='true'
				></div>
                <CloseModal closeModal={closeModal}/>
				<div className='relative bg-white p-6 w-fit'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;