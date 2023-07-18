import { Link } from "react-router-dom";
import moment from "moment";

function NewsCard({ article }) {
    return (
        <div className="card-container">
            <Link to={article?.url} target="_blank">
                <article className="card">
                    <img src={article?.image_url} alt={`${article?.title}`} />
                    <div className="text">
                        <h3>
                            {article?.title?.length > 50
                                ? article?.title.substring(0, 50) + "..."
                                : article?.title}
                        </h3>
                        <h5>
                            Published on{" "}
                            {moment(article?.published_at).format(
                                "MMMM Do YYYY"
                            )}
                        </h5>

                        <button>Read more ⇀</button>
                    </div>
                </article>
            </Link>
        </div>
    );
}
export default NewsCard;
