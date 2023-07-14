import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import aboutUsImage1 from "../../assets/img/aboutUsImage1.jpg";

function WhatWeDo1({ toRight, toLeft }) {
    return (
        <article className="what-we-do_1">
            <motion.div
                variants={toRight}
                className="animate fadeIn-appearFromLeft"
            >
                <h3>Business development for startups</h3>
                <p>
                    We have diligently pioneered the establishment of inaugural
                    revenue streams for startups, methodically forging
                    connections and uncovering hidden gems of opportunity. We
                    wholeheartedly champion industrious founders, consistently
                    advocating for their vision, and persistently driving
                    financial success. We recognize the paramount importance of
                    securing initial revenue, and we consider it a privilege to
                    contribute to extraordinary entrepreneurial odysseys.
                </p>
            </motion.div>
            <motion.img
                variants={toLeft}
                className="animate fadeIn-appearFromRight"
                src={aboutUsImage1}
                alt="ascending stairs"
            />
        </article>
    );
}
export default motionWrapper(WhatWeDo1);
