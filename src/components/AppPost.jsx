import js from "@eslint/js";
import style from "./AppPost.module.css"

const AppPost = ({ image, title, content, tags, published }) => {
    const imageArt = image ? `${image}` : "https://picsum.photos/200/300";
    const tagColors = {
        html: style.tagHtml,
        css: style.tagCss,
        js: style.tagJs,
        react: style.tagReact
    };

    return (
        <div className={`${style.card} mb1`}>
            <div className={style.cardHeader}>
                <img src={imageArt} alt={title} />
            </div>
            <div className={`${style.cardBody} mb1`}>
                <h3 className="title mb1">{title}</h3>
                <div className={`mb1 ${style.tags}`}>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`${style.tag} ${style[`tag-${tag}`] || style.tag}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mb1">{content}</p>
                <button className={style.button}>LEGGI DI PIÙ</button>
            </div>
        </div>
    )
};

export default AppPost;