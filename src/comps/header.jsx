import React from "react";

import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { IoHome, IoStorefrontSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsCollectionPlayFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiGroup2Fill, RiMessengerLine } from "react-icons/ri";
import { HiOutlineBellAlert } from "react-icons/hi2";

import { Avatar, IconButton } from "@material-ui/core";

import "./header.css";

export default function Header() {
    return (
        <div className="header d-flex justify-content-between align-items-center py-2">
            <div className="header__left d-flex mx-3">
                <IconContext.Provider
                    value={{ color: "#2e81f4", size: "3rem" }}
                >
                    <SiFacebook className="header_iFacebook" />
                </IconContext.Provider>

                <div className="header__input d-flex align-items-center px-3">
                    <IconContext.Provider value={{ size: "1.1rem" }}>
                        <GoSearch />
                    </IconContext.Provider>
                    <input
                        className="d-none d-xl-block bg-transparent border-0 ps-2"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="header__center d-flex justify-content-center flex-grow-1 opacity-75">
                <IconContext.Provider value={{ size: "1.8rem" }}>
                    <button type="button" className="btn btn-light mx-2">
                        <IoHome />
                    </button>
                    <button type="button" className="btn btn-light mx-2">
                        <TiUserAdd />
                    </button>
                    <button type="button" className="btn btn-light mx-2">
                        <BsCollectionPlayFill />
                    </button>
                    <button type="button" className="btn btn-light mx-2">
                        <IoStorefrontSharp />
                    </button>
                    <button type="button" className="btn btn-light mx-2">
                        <RiGroup2Fill />
                    </button>
                </IconContext.Provider>
            </div>

            <div className="header__right flex-shrink-0 mx-3">
                <IconContext.Provider value={{ size: "1.7rem" }}>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2"
                    >
                        <BsFillGrid3X3GapFill />
                    </button>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2"
                    >
                        <RiMessengerLine />
                    </button>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2 position-relative"
                    >
                        <HiOutlineBellAlert />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            9+
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </button>
                    <IconButton className="mx-1 p-1">
                        <Avatar className="" src="" />
                    </IconButton>
                </IconContext.Provider>
            </div>
        </div>
    );
}
