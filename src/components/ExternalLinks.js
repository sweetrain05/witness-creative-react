import { NavLink } from "react-router-dom";

export default function ExternalLinks() {
    const links = [
        {
            name: "facebook",
            url: "https://www.facebook.com/",
        },
        {
            name: "instagram",
            url: "https://www.instagram.com/",
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/danbi-choi/",
        },
    ];

    return (
        <>
            {links.map((link, i) => (
                <NavLink
                    key={i}
                    className="nav-link"
                    aria-current="page"
                    target="_blank"
                    to={link.url}
                >
                    <li className="links">
                        <i className={`fa-brands fa-${link.name}`} />
                    </li>
                </NavLink>
            ))}
        </>
    );
}
