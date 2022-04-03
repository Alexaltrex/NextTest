import style from "./Preloader.module.scss"

export const Preloader = () => {
    return (
        <div className={style.preloader}>
            <h2>loading...</h2>
        </div>
    )
}