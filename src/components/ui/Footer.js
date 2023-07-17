import ExternalLinks from "../ExternalLinks";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_email">
                    <p>
                        <i className="fa-solid fa-envelope" />
                        <a href="mailto:sweetrain05@hotmail.com">
                            sweetrain05@hotmail.com
                        </a>
                    </p>
                </div>
                <ul className="footer_externalLinks">
                    <ExternalLinks />
                </ul>
                <div className="footer_rights">
                    <p>All rights reserved @ Dan Bi Choi</p>
                </div>
            </footer>
        </>
    );
}
