import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import aboutUsImage2 from "../../assets/img/aboutUsImage2.jpg";

function WhatWeDo2({ toRight, toLeft }) {
    return (
        <article className="what-we-do_2">
            <motion.div
                variants={toLeft}
                className="animate fadeIn-appearFromRight"
            >
                <h3>Capital raising advisory consulting</h3>
                <p>
                    The symbiotic relationship between capital raising and
                    business development is inherent within fast-growing
                    startups. We possess a comprehensive grasp of this intricate
                    dynamic and work closely with our partners to navigate the
                    transformative moments with meticulous preparation. We
                    remain steadfast in our commitment to support our partners
                    through all circumstances, unwavering in our dedication to
                    their success, come rain or shine.
                </p>
            </motion.div>
            <motion.img
                variants={toRight}
                className="animate fadeIn-appearFromLeft"
                src={aboutUsImage2}
                alt="active discussion"
            />
        </article>
    );
}
export default motionWrapper(WhatWeDo2);
