import Link from "next/link";
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <nav className={style.header}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
        </nav>
    )
}