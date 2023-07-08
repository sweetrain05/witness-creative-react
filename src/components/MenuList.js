import { NavLink } from "react-router-dom";

export default function MenuList() {
    return (
        <>
            <NavLink className="nav-link" aria-current="page" to="/">
                <li className="menu_li">home</li>
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to="/news">
                <li className="menu_li">news</li>
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to="/contact">
                <li className="menu_li">contact</li>
            </NavLink>
        </>
    );
}
