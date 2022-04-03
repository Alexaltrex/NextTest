import style from "./Custom404.module.scss"
import Link from "next/link";

export default function Custom404() {
    return (
        <div className={style.custom404}>
            <div className={style.content}>
                <h1>404 - Page Not Found</h1>
                <Link href="/"><a>Back to home</a></Link>
            </div>

        </div>

    )
}