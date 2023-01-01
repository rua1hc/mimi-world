import React from "react";

import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { IoHome, IoStorefrontSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsCollectionPlayFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiGroup2Fill, RiMessengerLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

import Badge from "@mui/material/Badge";
import { Avatar, IconButton } from "@material-ui/core";

import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navibar">
            <div className="d-flex justify-content-between align-items-center">
                <div className="navbar__left d-flex mx-3">
                    <IconContext.Provider
                        value={{
                            size: "3rem",
                            color: "#1876F2",
                            style: { cursor: "pointer", padding: "2px" },
                        }}
                    >
                        <SiFacebook className="" />
                    </IconContext.Provider>

                    <div className="navbar__input d-flex align-items-center rounded-pill px-3">
                        <IconContext.Provider
                            value={{
                                size: "1.1rem",
                                style: { cursor: "pointer" },
                            }}
                        >
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
                        <button
                            type="button"
                            className="btn btn-light mx-2 py-2"
                        >
                            <IoHome />
                        </button>
                        <button
                            type="button"
                            className="btn btn-light mx-2 py-2"
                        >
                            <TiUserAdd />
                        </button>
                        <button
                            type="button"
                            className="btn btn-light mx-2 py-2"
                        >
                            <BsCollectionPlayFill />
                        </button>
                        <button
                            type="button"
                            className="btn btn-light mx-2 py-2"
                        >
                            <IoStorefrontSharp />
                        </button>
                        <button
                            type="button"
                            className="btn btn-light mx-2 py-2"
                        >
                            <RiGroup2Fill />
                        </button>
                    </IconContext.Provider>
                </div>

                <div className="navbar__right flex-shrink-0 mx-2">
                    <IconContext.Provider value={{ size: "1.4rem" }}>
                        <IconButton className="notifier">
                            <BsFillGrid3X3GapFill />
                        </IconButton>

                        <Badge
                            badgeContent={"9+"}
                            color="error"
                            sx={{
                                "& .MuiBadge-badge": {
                                    top: "5px",
                                    right: "5px",
                                },
                            }}
                        >
                            <IconButton className="notifier">
                                <RiMessengerLine />
                            </IconButton>
                        </Badge>

                        <Badge
                            badgeContent={"9+"}
                            color="error"
                            sx={{
                                "& .MuiBadge-badge": {
                                    top: "5px",
                                    right: "5px",
                                },
                            }}
                        >
                            <IconButton className="notifier">
                                <MdOutlineNotificationsActive />
                            </IconButton>
                        </Badge>

                        <IconButton className="notifier p-0">
                            <Avatar className="" src="" />
                        </IconButton>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}
