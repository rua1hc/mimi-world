import React, { useState } from "react";

import { Avatar } from "@material-ui/core";
// import { IconContext } from "react-icons";
// import { RiVideoChatFill } from "react-icons/ri";
// import { FaPhotoVideo, FaRegLaughSquint } from "react-icons/fa";
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
        <div className="post__sender py-2">
            <form>
                <div className="post__status d-flex justify-content-center align-items-center mb-2 px-3">
                    <Avatar className="" src="" />
                    <input
                        className="flex-grow-1 border-0 ms-2"
                        type="text"
                        placeholder="What's on your mind?"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-evenly px-2">
                    <div className="btn btn-light d-flex justify-content-center align-items-center flex-grow-1">
                        <VideocamIcon />
                        <p className="ms-1 my-0">Live video</p>
                    </div>
                    <div className="btn btn-light d-flex justify-content-center align-items-center flex-grow-1">
                        <PhotoLibraryIcon />
                        <p className="ms-1 my-0">Photo/video</p>
                    </div>
                    <div className="btn btn-light d-flex justify-content-center align-items-center flex-grow-1">
                        <InsertEmoticonIcon />
                        <p className="ms-1 my-0">Feeling/activity</p>
                    </div>
                </div>

                <div className="post__types d-flex justify-content-evenly">
                    <div className="post__type">
                        <VideocamIcon />
                        <p className="m-0">Live video</p>
                    </div>
                    <div className="post__type">
                        <PhotoLibraryIcon />
                        <p className="m-0">Photo/video</p>
                    </div>
                    <div className="post__type">
                        <InsertEmoticonIcon />
                        <p className="m-0">Feeling/activity</p>
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
