import React, { useState } from "react";

import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import "./postSender.css";

function PostSender() {
    const [caption, setCaption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // db stuff

        console.log(caption);
        setCaption("");
    };

    return (
        <div className="postSender">
            <form className="postSender__form rounded-3 py-1">
                <div className="postSender__input d-flex justify-content-center align-items-center my-2 px-3">
                    <Avatar className="" src="" />
                    <input
                        className="flex-grow-1 border-0 ms-2"
                        type="text"
                        placeholder="What's on your mind?"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>

                <div className="postSender__preview"></div>

                <div className="postSender__types d-flex justify-content-evenly">
                    <div className="postSender__type text-danger">
                        <VideocamIcon />
                        <p className="text-dark m-0">Live video</p>
                    </div>
                    <div className="postSender__type text-success">
                        <PhotoLibraryIcon />
                        <p className="text-dark m-0">Photo/video</p>
                    </div>
                    <div className="postSender__type text-warning">
                        <InsertEmoticonIcon />
                        <p className="text-dark m-0">Feeling/activity</p>
                    </div>
                </div>

                <button type="submit" className="d-none" onClick={handleSubmit}>
                    Hidden
                </button>
            </form>
        </div>
    );
}

export default PostSender;
