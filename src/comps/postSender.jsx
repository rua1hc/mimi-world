import React, { useState } from "react";

import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { FaPhotoVideo, FaRegLaughSquint } from "react-icons/fa";
import { RiVideoChatFill } from "react-icons/ri";

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
                    <IconContext.Provider
                        value={{ color: "#2e81f4", size: "3rem" }}
                    >
                        <SiFacebook className="" />
                    </IconContext.Provider>

                    <input
                        className="flex-grow-1 border-0 ms-2"
                        type="text"
                        placeholder="What's on your mind?"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>

                <div className="post__options">
                    <div className="d-flex justify-content-evenly align-items-center px-2">
                        <button type="button" className="btn btn-light">
                            <IconContext.Provider
                                value={{ size: "1.8rem", color: "red" }}
                            >
                                <RiVideoChatFill />
                            </IconContext.Provider>
                            <span className="ms-1">Live video</span>
                        </button>
                        <button type="button" className="btn btn-light">
                            <IconContext.Provider
                                value={{ size: "1.8rem", color: "green" }}
                            >
                                <FaPhotoVideo />
                            </IconContext.Provider>
                            <span className="ms-1">Photo/video</span>
                        </button>
                        <button type="button" className="btn btn-light">
                            <IconContext.Provider
                                value={{ size: "1.8rem", color: "orange" }}
                            >
                                <FaRegLaughSquint />
                            </IconContext.Provider>
                            <span className="ms-1">Feeling/activity</span>
                        </button>
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
