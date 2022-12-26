import React from "react";
import { ToastContainer } from "react-toastify";

import Timeline from "./comps/timeline";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./comps/header";
import PostSender from "./comps/postSender";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />

            <Header />
            <div className="app__body container-fluid p-0">
                <PostSender />
                <Timeline />
            </div>
        </React.Fragment>
    );
}

export default App;
