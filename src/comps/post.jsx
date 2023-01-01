import React from "react";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ForkRightOutlinedIcon from "@mui/icons-material/ForkRightOutlined";

import "./post.css";

function Post({ userName, userAvatar, timestamp, caption, image }) {
    return (
        <div className="post rounded-3">
            <div className="post__header px-3 py-2">
                <Avatar className="post__avatar" src={userAvatar} />
                <div className="post__info px-2">
                    <h5 className="m-0">{userName}</h5>
                    <span>timestamp</span>
                </div>
            </div>

            <div className="post__caption px-2">
                <p>{caption}</p>
                <span>caption</span>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
                <span>image</span>
            </div>

            <div className="post__options">
                <div className="post__option rounded-3">
                    <ThumbUpAltOutlinedIcon />
                    <p className="ms-1 my-0">Like</p>
                </div>
                <div className="post__option rounded-3">
                    <ChatOutlinedIcon />
                    <p className="ms-1 my-0">Comment</p>
                </div>
                <div className="post__option rounded-3">
                    <ForkRightOutlinedIcon />
                    <p className="ms-1 my-0">Share</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
