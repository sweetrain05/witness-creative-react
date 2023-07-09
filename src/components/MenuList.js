import { NavLink } from "react-router-dom";

export default function MenuList({ handleMenuClick }) {
    return (
        <>
            <NavLink className="nav-link" aria-current="page" to="/">
                <li className="menu_li" onClick={handleMenuClick}>
                    home
                </li>
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to="/news">
                <li className="menu_li" onClick={handleMenuClick}>
                    news
                </li>
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to="/contact">
                <li className="menu_li" onClick={handleMenuClick}>
                    contact
                </li>
            </NavLink>
        </>
    );
}
