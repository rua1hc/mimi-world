import React from "react";
import { ToastContainer } from "react-toastify";

import Timeline from "./comps/timeline";
import Header from "./comps/header";
import PostSender from "./comps/postSender";
import Post from "./comps/post";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />

            <Header />
            <div className="app__body container-fluid p-0">
                <PostSender />
                <Post userName="rua1hc" />
                <Timeline />
            </div>
        </React.Fragment>
    );
}

export default App;
