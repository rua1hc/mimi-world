import React from "react";
import { ToastContainer } from "react-toastify";

import Timeline from "./comps/timeline";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./comps/header";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />

            <div className="container-fluid p-0">
                <Header />
                <Timeline />
            </div>
        </React.Fragment>
    );
}

export default App;
