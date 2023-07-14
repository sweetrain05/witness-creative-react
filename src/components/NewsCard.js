import aboutUsImage1 from "../assets/img/aboutUsImage1.jpg";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";

function NewsCard({ ascend }) {
    return (
        <motion.article variants={ascend} className="card">
            <img src={aboutUsImage1} alt={aboutUsImage1} />
            <div className="text">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam non consectetur mauris. Ut eu dui nunc. Suspendisse
                </p>
                <h5>Published on July 4</h5>
                <button>Read more ⇀</button>
            </div>
        </motion.article>
    );
}
export default motionWrapper(NewsCard);
