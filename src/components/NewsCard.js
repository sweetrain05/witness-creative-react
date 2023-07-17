// import { Link } from "react-router-dom";
// import moment from "moment";

// function NewsCard({ article }) {
//     return (
//         <article className="card">
//             <img
//                 src={article?.cover_image}
//                 alt={`Image related to ${article?.title}`}
//             />
//             <div className="text">
//                 <h3>
//                     {article?.title?.length > 50
//                         ? article?.title.substring(0, 50) + "..."
//                         : article?.title}
//                 </h3>
//                 <p>{article?.description}</p>
//                 <h5>
//                     Published on{" "}
//                     {moment(article?.published_at).format("MMMM Do YYYY")}
//                 </h5>
//                 <Link to={article?.url} target="_blank">
//                     <button>Read more ⇀</button>
//                 </Link>
//             </div>
//         </article>
//     );
// }
// export default NewsCard;

import { Link } from "react-router-dom";
import moment from "moment";

function NewsCard({ article }) {
    return (
        <article className="card">
            <img
                src={article?.image_url}
                alt={`Image related to ${article?.title}`}
            />
            <div className="text">
                <h3>
                    {article?.title?.length > 50
                        ? article?.title.substring(0, 50) + "..."
                        : article?.title}
                </h3>
                <p>{article?.description}</p>
                <h5>
                    Published on{" "}
                    {moment(article?.published_at).format("MMMM Do YYYY")}
                </h5>
                <Link to={article?.url} target="_blank">
                    <button>Read more ⇀</button>
                </Link>
            </div>
        </article>
    );
}
export default NewsCard;
