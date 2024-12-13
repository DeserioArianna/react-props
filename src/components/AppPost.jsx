import style from "./AppPost.module.css"

const AppPost = ({ image, title, content, tags, published }) => {

    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <img src={image} alt={title} />
            </div>
            <div className={`${style.cardBody} mb1`}>
                <h3 className="title mb1">{title}</h3>
                <p className="mb1">{content}</p>
                <button className={style.button}>LEGGI DI PIÙ</button>
            </div>
        </div>
    )
};

export default AppPost;