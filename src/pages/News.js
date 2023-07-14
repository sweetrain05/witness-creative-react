import { useEffect } from "react";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";
import NewsCard from "../components/NewsCard";
import axios from "axios";

function News({ ascend }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        loadNews();
    }, []);

    // const loadNews = async () => {
    //     try {
    //         const {data} = await axios.get()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

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
            <div className="news_container">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </article>
    );
}

export default motionWrapper(News);
