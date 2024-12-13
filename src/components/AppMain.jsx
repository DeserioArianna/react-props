import posts from "../data/posts";
import AppPost from "./AppPost";
import style from "./AppPost.module.css"

const AppMain = () => {
    const postCard = posts.filter((post) => post.published === true);

    return (
        <div className="container main">
            <div className={style.row}>
                <div className={style.col}>
                    {postCard.map((post) => (
                        <AppPost
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            content={post.content}
                            tags={post.tags} />
                    ))};
                </div>
            </div>
        </div>
    );
};

export default AppMain;