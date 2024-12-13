import style from "./AppHeader.module.css"

const AppHeader = () => {
    return (
        <header className="container">
            <h1 className={style.title}>Il Mio Blog</h1>
        </header>
    );
};

export default AppHeader;