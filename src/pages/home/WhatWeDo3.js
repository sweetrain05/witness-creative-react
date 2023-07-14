import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import aboutUsImage3 from "../../assets/img/aboutUsImage3.jpg";

function WhatWeDo3({ toRight, toLeft }) {
    return (
        <article className="what-we-do_3">
            <motion.div
                variants={toRight}
                className="animate fadeIn-appearFromLeft"
            >
                <h3>
                    Commercializing the innovation: Biotech-based cosmetics
                    ingredients
                </h3>
                <p>
                    We have adeptly executed numerous business development
                    projects, among them being the pioneering venture into
                    cosmetics ingredient products. As a result, we have become
                    esteemed providers of exceptionally distinctive and
                    groundbreaking cosmetics ingredients to our esteemed global
                    partners. If your beauty brand prides itself on innovation
                    or if you aspire to showcase your inventive ingredients to
                    the world, we are poised to collaboratively forge a pathway
                    to success.
                </p>
            </motion.div>
            <motion.img
                variants={toLeft}
                className="animate fadeIn-appearFromRight"
                src={aboutUsImage3}
                alt="biology lab"
            />
        </article>
    );
}
export default motionWrapper(WhatWeDo3);
