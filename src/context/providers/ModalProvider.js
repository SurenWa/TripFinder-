import React, { useState, useReducer } from 'react';

import ModalContext from '../ModalContext';
import ModalReducer from '../reducers/ModalReducer';


const ModalProvider = (props) => {

    const [state, dispatch] = useReducer(ModalReducer, {
        modalStatus: false,
        current: '',
    });


    return (
        <ModalContext.Provider
            value={{
                state,
                dispatch
            }}>
            {props.children}
        </ModalContext.Provider>
    );
};
export default ModalProvider;