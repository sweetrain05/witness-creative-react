import { useEffect } from "react";

export default function News() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article class="page news">
            <div class="news_title">
                <h1>Our Stories</h1>
                <p>
                    Explore diverse perspectives, uncover inspiring stories, and
                    stay connected with our platform, dedicated to keeping you
                    informed and inspired.
                </p>
            </div>
            <div class="news_container">News Cards come here</div>
        </article>
    );
}
