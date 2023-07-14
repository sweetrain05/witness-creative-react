import { motion } from "framer-motion";
import motionWrapper from "../../wrapper/motionWrapper";
import aboutUsImage4 from "../../assets/img/aboutUsImage4.jpg";

function WhatWeDo4({ toRight, toLeft }) {
    return (
        <article className="what-we-do_4">
            <motion.div variants={toRight}>
                <h3>Climate technology business operations</h3>
                <p>
                    Our unwavering commitment to business development has
                    resulted in the successful implementation and management of
                    vital battery technologies. Moreover, we have expanded our
                    operations to the United States, leveraging our expertise
                    gained in Asia to propose improved alternatives to
                    established industry players.
                </p>
            </motion.div>
            <motion.img variants={toLeft} src={aboutUsImage4} alt="eco cube" />
        </article>
    );
}
export default motionWrapper(WhatWeDo4);
