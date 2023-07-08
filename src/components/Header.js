import { NavLink } from "react-router-dom";
import "../App.scss";
import companyLogo from "../assets/svg/witnessLogo.svg";
import menuBar from "../assets/svg/menubar.svg";
import { useState, useEffect } from "react";
import MenuList from "./MenuList";
import ExternalLinks from "./ExternalLinks";

export default function Header() {
    // state
    const [screenWidth, setScreenWidth] = useState(0);
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
        getCurrentScreenWidth();
    }, []);

    window.addEventListener("resize", () => {
        getCurrentScreenWidth();
        setMenuToggle(false);
    });

    const getCurrentScreenWidth = () => {
        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        setScreenWidth(width);
    };

    const handleMenuClick = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <header className="header">
            <div className="header_container">
                <NavLink className="nav-link" aria-current="page" to="/">
                    <img src={companyLogo} alt="Company Logo" />
                </NavLink>
                <ul className="header_rightside">
                    {screenWidth < 767 ? (
                        menuToggle ? (
                            <div className="menu_container_overlay">
                                <button
                                    className="menu_btn_close"
                                    onClick={handleMenuClick}
                                >
                                    ×
                                </button>
                                <ul className="menu_list">
                                    <MenuList />
                                </ul>
                                <ul className="menu_externalLinks">
                                    <ExternalLinks />
                                </ul>
                            </div>
                        ) : (
                            <div
                                className="hamburger-menu"
                                onClick={handleMenuClick}
                            >
                                <svg width={25} height={25}>
                                    <image
                                        href={menuBar}
                                        width="100%"
                                        height="100%"
                                    />
                                </svg>
                            </div>
                        )
                    ) : (
                        <>
                            <MenuList />
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}
