import ExternalLinks from "./ExternalLinks";
import MenuList from "./MenuList";

export default function MenuOverlay({ handleMenuClick }) {
    return (
        <div className="menu_container_overlay">
            <button className="menu_btn_close" onClick={handleMenuClick}>
                ×
            </button>
            <ul className="menu_list">
                <MenuList handleMenuClick={handleMenuClick} />
            </ul>
            <ul className="menu_externalLinks">
                <ExternalLinks />
            </ul>
        </div>
    );
}
