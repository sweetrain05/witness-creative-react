import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import LoadingGIF from "../assets/img/Loading_icon.gif";

function News({ ascend }) {
    //state
    const [articleList, setArticleList] = useState([]);
    const [articleLength, setArticleLength] = useState(0);
    const [articleInfo, setArticleInfo] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (articleLength === 0) loadArticleList();
    }, []);

    const loadArticleList = async () => {
        try {
            const { associated_articles } = (
                await axios.request({
                    method: "GET",
                    url: "https://medium2.p.rapidapi.com/user/37bdb09bd139/articles",
                    headers: {
                        "X-RapidAPI-Key":
                            "6731250122msh22a4fc489d981d6p181ae7jsn42326f89d137",
                        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
                    },
                })
            ).data;
            setArticleList(associated_articles);
            setArticleLength(associated_articles.length);
            console.log("article list load complete.");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!isInitialRender) {
            console.log(articleList);
            console.log(articleLength);
            const articlesPerPage = 3;
            const loadedArticleNumber = articlesPerPage * pageNumber;
            if (articleList?.length > 0) {
                if (
                    articleLength <= articlesPerPage ||
                    loadedArticleNumber < articleLength
                ) {
                    if (pageNumber === 1) {
                        for (let i = 0; i < loadedArticleNumber; i++) {
                            loadArticleInfo(i);
                        }
                    } else {
                        for (
                            let i = articlesPerPage;
                            i < loadedArticleNumber;
                            i++
                        ) {
                            loadArticleInfo(i);
                        }
                    }
                    // setTimeout(() => {
                    //     setLoading(false);
                    // }, 3000);
                }
            }
        } else {
            setIsInitialRender(false);
        }
    }, [articleList, pageNumber, isInitialRender]);

    const loadArticleInfo = async (i) => {
        try {
            const response = await axios.request({
                method: "GET",
                url: `https://medium2.p.rapidapi.com/article/${articleList[i]}`,
                headers: {
                    "X-RapidAPI-Key":
                        "6731250122msh22a4fc489d981d6p181ae7jsn42326f89d137",
                    "X-RapidAPI-Host": "medium2.p.rapidapi.com",
                },
            });
            setArticleInfo((articleInfo) => [...articleInfo, response.data]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (articleInfo?.length >= articleLength) {
            setLoading(false);
        }
    }, [articleInfo]);

    useEffect(() => {
        if (articleInfo?.length > 0) {
            console.log(articleInfo);
        }
    }, [articleInfo]);

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
                {loading ? (
                    <img src={LoadingGIF} alt="Loading..." />
                ) : (
                    articleInfo?.map((article, i) => (
                        <NewsCard key={i} article={article} />
                    ))
                )}
                {/* {articleInfo?.length > 0 &&
                    articleInfo?.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))} */}
            </div>
        </article>
    );
}

export default motionWrapper(News);
