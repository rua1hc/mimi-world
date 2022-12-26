import React from "react";

import { IconContext } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { IoHome, IoStorefrontSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiGroup2Fill, RiMessengerLine } from "react-icons/ri";
import { RxBell } from "react-icons/rx";

import "./header.css";

export default function Header() {
    return (
        <div className="header d-flex justify-content-between align-items-center py-1">
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
                <IconContext.Provider value={{ size: "2rem" }}>
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
                <IconContext.Provider value={{ size: "2rem" }}>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2"
                    >
                        <RiMessengerLine />
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
                        <RxBell />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            9+
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="btn rounded-circle border-0 mx-1 p-2"
                    >
                        <RiMessengerLine />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    );
}
