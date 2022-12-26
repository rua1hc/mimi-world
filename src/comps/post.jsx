import React from "react";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./post.css";

function Post({ userName, userAvatar, timestamp, caption, image }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={userAvatar} />
                <div className="post__info">
                    <h3>{userName}</h3>
                    <p>timestamp</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{caption}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;
