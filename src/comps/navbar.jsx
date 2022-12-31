import React from "react";

import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { IoHome, IoStorefrontSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiGroup2Fill, RiMessengerLine } from "react-icons/ri";

import { Avatar, IconButton } from "@material-ui/core";
import Badge from "@mui/material/Badge";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navibar d-flex justify-content-between align-items-center">
            <div className="navbar__left d-flex mx-3">
                <IconContext.Provider
                    value={{ color: "#1876F2", size: "3rem" }}
                >
                    <SiFacebook className="navbar__iFacebook" />
                </IconContext.Provider>

                <div className="navbar__input d-flex align-items-center px-3">
                    <IconContext.Provider value={{ size: "1.1rem" }}>
                        <GoSearch />
                    </IconContext.Provider>
                    <input
                        className="d-none d-lg-block bg-transparent border-0 ps-2"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="navbar__center d-flex justify-content-center flex-grow-1 opacity-75 mx-xl-5 px-0 px-lg-5">
                <IconContext.Provider value={{ size: "1.7rem" }}>
                    <button type="button" className="btn btn-light mx-2 py-2">
                        <IoHome />
                    </button>
                    <button type="button" className="btn btn-light mx-2 py-2">
                        <TiUserAdd />
                    </button>
                    <button type="button" className="btn btn-light mx-2 py-2">
                        <BsCollectionPlayFill />
                    </button>
                    <button type="button" className="btn btn-light mx-2 py-2">
                        <IoStorefrontSharp />
                    </button>
                    <button type="button" className="btn btn-light mx-2 py-2">
                        <RiGroup2Fill />
                    </button>
                </IconContext.Provider>
            </div>

            <div className="navbar__right flex-shrink-0 mx-2">
                <IconContext.Provider value={{ size: "1.7rem" }}>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2"
                    >
                        <RiMessengerLine />
                    </button>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={"9+"} color="error">
                            <NotificationsActiveIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className="mx-1 p-1">
                        <Avatar className="" src="" />
                    </IconButton>
                </IconContext.Provider>
            </div>
        </div>
    );
}
