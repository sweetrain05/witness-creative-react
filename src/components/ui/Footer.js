import ExternalLinks from "../ExternalLinks";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_email">
                    <p>
                        <i className="fa-solid fa-envelope" />
                        <a href="mailto:soojin@witnesspartners.us">
                            soojin@witnesspartners.us
                        </a>
                    </p>
                </div>
                <ul className="footer_externalLinks">
                    <ExternalLinks />
                </ul>
                <div className="footer_rights">
                    <p>All rights reserved</p>
                    <p>@Witness Creative Partners Inc.</p>
                </div>
            </footer>
        </>
    );
}
