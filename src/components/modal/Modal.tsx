import React, { FunctionComponent } from "react";
import CloseModal from "./CloseModal";

interface ModalProps {
	closeModal: () => void;
	children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ closeModal, children }) => {
	return (
		<div className='modal fixed inset-0 z-50 top-0 left-0 flex flex-col md:flex-row items-center justify-center overflow-auto h-screen md:h-full bg-gray-900 bg-opacity-50'>
			<div className='modal-container relative h-screen md:h-auto md:max-w-5xl mx-auto'>
				<div
					className='absolute inset-0'
					onClick={closeModal}
					aria-hidden='true'
				></div>
                <CloseModal closeModal={closeModal}/>
				<div className='modal-content relative bg-white p-6 w-screen md:w-fit'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;