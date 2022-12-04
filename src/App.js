import React from "react";

import { ToastContainer } from "react-toastify";

import Timeline from "./comps/timeline";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />
            <div className="container">
                <Timeline />
            </div>
        </React.Fragment>
    );
}

export default App;
