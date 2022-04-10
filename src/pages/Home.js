import React, { useState, useContext } from 'react'

import ModalContext from '../context/ModalContext';
import Header from '../components/Header'
import Modal from '../components/Modal';
import { OPEN_MODAL } from '../context/types/ModalTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Home = () => {
    const { dispatch } = useContext(ModalContext);
    const [state] = useState({
		heading: 'We are travel friends',
		paragraph:
			'Come and join us we travel the most famous and beautiful places in the world',
	});

    const [registerModal] = useState('registerModal')
    const [loginModal] = useState('loginModal')

    return (
        <>
            <Header heading={state.heading} paragraph={state.paragraph}>
                <button 
                    className='btn-default' 
                    onClick={() => dispatch({ type: OPEN_MODAL, payload: registerModal })}
                >
                    Get Started
                </button>
            </Header>
            <Modal current = {registerModal}>
                <Register currentModal={loginModal} />
            </Modal>
            <Modal current = {loginModal}>
                <Login currentModal={registerModal}/>
            </Modal>
        </>        
    )
}

export default Home