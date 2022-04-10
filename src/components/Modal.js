import React, { useContext } from 'react';


import ModalContext from '../context/ModalContext';
import { CLOSE_MODAL } from '../context/types/ModalTypes';



const Modal = (props) => {

	const { state, dispatch } = useContext(ModalContext);

	const close = (e) => {
		if (e.target.getAttribute('class') === 'modal') {
			dispatch({ type: CLOSE_MODAL });
		}
	};

	return state.modalStatus && state.current === props.current ? (
		<div className='modal' onClick={close}>
			<div className='modal__body'>{props.children}</div>
		</div>
	) : (
		''
	);
};
export default Modal;