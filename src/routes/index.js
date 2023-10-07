import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignPage from "../components/signPage";
import RegisterPage from "../components/registerPage";
import Home from "../components/homePage";

import React from 'react'

const Private = ({ Item }) => {
    const signed= false;
    return signed > 0 ? <Item /> : <SignPage />;
}

const RoutesApp = () => {
    return(
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />;
                <Route path="/" element={<SignPage />} />;
                <Route exact path="/register" element={<RegisterPage />} />;
                <Route path="*" element={<SignPage />} />;
            </Routes>
        </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;