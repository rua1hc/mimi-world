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
            <form className="postSender__form rounded-3 px-3 pt-3 pb-1">
                <div className="postSender__input d-flex justify-content-center align-items-center">
                    <Avatar className="" src="" />
                    <input
                        className="flex-grow-1 rounded-pill border-0 ms-2"
                        type="text"
                        placeholder="What's on your mind?"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>

                <div className="postSender__preview py-1">
                    postSender__preview
                </div>

                <div className="postSender__types d-flex justify-content-evenly">
                    <div className="postSender__type rounded-3">
                        <VideocamIcon
                            className="postSender__icon p-0"
                            style={{ color: "red" }}
                            fontSize="large"
                        />
                        <p className="ms-1 my-0">Live video</p>
                    </div>
                    <div className="postSender__type rounded-3">
                        <PhotoLibraryIcon
                            className="postSender__icon"
                            style={{ color: "limegreen" }}
                            fontSize="large"
                        />
                        <p className="ms-1 my-0">Photo/video</p>
                    </div>
                    <div className="postSender__type rounded-3 text-warning">
                        <InsertEmoticonIcon
                            className="postSender__icon"
                            fontSize="large"
                        />
                        <p className="text-dark ms-1 my-0">Feeling/activity</p>
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
