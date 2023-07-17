import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import motionWrapper from "../wrapper/motionWrapper";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import LoadingGIF from "../assets/img/Loading_icon.gif";
import { newsData, newsList } from "../data/newsData";

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
            setTimeout(() => {
                setArticleList(newsList);
                setArticleLength(newsList.length);
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    };

    // 👉 For real-time API request through axios, use the code below for loadArticleList()
    // const loadArticleList = async () => {
    //     try {
    //         const { associated_articles } = (
    //             await axios.request({
    //                 method: "GET",
    //                 url: "https://medium2.p.rapidapi.com/user/37bdb09bd139/articles",
    //                 headers: {
    //                     "X-RapidAPI-Key":
    //                         "6731250122msh22a4fc489d981d6p181ae7jsn42326f89d137",
    //                     "X-RapidAPI-Host": "medium2.p.rapidapi.com",
    //                 },
    //             })
    //         ).data;
    //         setArticleList(associated_articles);
    //         setArticleLength(associated_articles.length);
    //         console.log("article list load complete.");
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    useEffect(() => {
        if (!isInitialRender) {
            const articlesPerPage = 3;
            const loadedArticleNumber = articlesPerPage * pageNumber;
            if (articleList?.length > 0) {
                if (pageNumber === 1) {
                    for (let i = 0; i < loadedArticleNumber; i++) {
                        loadArticleInfo(i);
                    }
                } else {
                    for (
                        let i = loadedArticleNumber - articlesPerPage;
                        i < Math.min(loadedArticleNumber, articleLength);
                        i++
                    ) {
                        loadArticleInfo(i);
                    }
                }
            }
        } else {
            setIsInitialRender(false);
        }
    }, [articleList, pageNumber]);

    const loadArticleInfo = (i) => {
        try {
            setTimeout(() => {
                setArticleInfo((articleInfo) => [...articleInfo, newsData[i]]);
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    };

    // 👉 For real-time API request through axios, use the code below for loadArticleInfo()
    // const loadArticleInfo = async (i) => {
    //     try {
    //         const response = await axios.request({
    //             method: "GET",
    //             url: `https://medium2.p.rapidapi.com/article/${articleList[i]}`,
    //             headers: {
    //                 "X-RapidAPI-Key":
    //                     "6731250122msh22a4fc489d981d6p181ae7jsn42326f89d137",
    //                 "X-RapidAPI-Host": "medium2.p.rapidapi.com",
    //             },
    //         });
    //         setArticleInfo((articleInfo) => [...articleInfo, response.data]);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    useEffect(() => {
        if (articleInfo?.length > 0) {
            setLoading(false);
        }
    }, [articleInfo]);

    const handleLoadMore = () => {
        setPageNumber((pageNum) => pageNum + 1);
        setLoading(true);
    };

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
                {!loading || articleInfo?.length > 0
                    ? articleInfo?.map((article) => (
                          <NewsCard key={article.id} article={article} />
                      ))
                    : null}
                {loading && <img src={LoadingGIF} alt="Loading..." />}
                {!loading && articleInfo?.length < articleLength ? (
                    <button className="loadBtn" onClick={handleLoadMore}>
                        Load More
                    </button>
                ) : null}
            </div>
        </article>
    );
}

export default motionWrapper(News);
