import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import landingImage1 from "../../assets/img/landingImage1.jpg";
import landingImage2 from "../../assets/img/landingImage2.jpg";

function Intro({ ascend }) {
    return (
        <section className="intro">
            <motion.p
                variants={ascend}
                className="intro_statement animate fadeIn-ascend"
            >
                We connect great minds so that dreams become reality.
            </motion.p>

            <NavLink className="nav-link" aria-current="page" to="/contact">
                <button className="intro_btn_contact goToContact">
                    ⇀ contact us
                </button>
            </NavLink>
            <div className="intro_img_container">
                <motion.img
                    variants={ascend}
                    className="animate fadeIn-ascend-s1"
                    src={landingImage1}
                    alt="meeting"
                />
                <motion.img
                    variants={ascend}
                    className="animate fadeIn-ascend-s1"
                    src={landingImage2}
                    alt="office"
                />
                <svg
                    className="animate fadeIn-ascend-s2"
                    width={130}
                    height={130}
                    viewBox="0 0 130 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx={65} cy={65} r={65} fill="#FF6565" />
                </svg>
            </div>
        </section>
    );
}
export default motionWrapper(Intro);
