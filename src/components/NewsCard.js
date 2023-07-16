import aboutUsImage1 from "../assets/img/aboutUsImage1.jpg";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";
import { Link } from "react-router-dom";

function NewsCard({ article }) {
    return (
        <motion.article className="card">
            <img src={article?.image_url} alt={article?.title} />
            <div className="text">
                <h3>{article?.title}</h3>
                <p>{article?.subtitle}</p>
                <h5>Published on {article?.published_at}</h5>
                <Link to={article?.url} target="_blank">
                    <button>Read more ⇀</button>
                </Link>
            </div>
        </motion.article>
    );
}
export default motionWrapper(NewsCard);
