import { useEffect } from "react";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";

function News({ ascend }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="page news">
            <div className="news_title">
                <motion.h1 variants={ascend}>Our Stories</motion.h1>
                <motion.p variants={ascend}>
                    Explore diverse perspectives, uncover inspiring stories, and
                    stay connected with our platform, dedicated to keeping you
                    informed and inspired.
                </motion.p>
            </div>
            <div className="news_container">News Cards come here</div>
        </article>
    );
}

export default motionWrapper(News);
