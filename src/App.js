import React from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./comps/navbar";
import PostSender from "./comps/postSender";
import Post from "./comps/post";
import Timeline from "./comps/timeline";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />

            <Navbar />

            <div className="app__body container-fluid m-0 px-0 py-3">
                <div className="main__body container-xxl p-0">
                    <PostSender />
                    <Post userName="rua1hc" />
                    <Timeline />
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
