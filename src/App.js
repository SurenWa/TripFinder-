import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';

import ModalProvider from './context/providers/ModalProvider';
import NavProvider from './context/providers/NavProvider';


function App() {

    return (
        <Router>
            <ModalProvider>
                <NavProvider>
                    <Nav />
                    <Routes>       
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />               
                    </Routes>
                </NavProvider>
            </ModalProvider>
        </Router>
    );
}

export default App;
