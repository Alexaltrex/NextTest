import {GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage} from "next";
import {MainLayout} from "../../components/layouts/MainLayout";
import style from "./posts.module.scss"
import Link from "next/link";

export interface IPost {
    id: string
    title: string
    text: string
}

export const getStaticProps = async () => {

    const response = await fetch(`https://next-test-ochre-three.vercel.app/api/post`);
    const posts: IPost[] | null = await response.json();
    const subtitle = String(process.env.SUBTITLE) ?? "Default Subtitle";
    //console.log(process.env.SUBTITLE)
    if (!posts) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {
                posts,
                subtitle,
            }
        }
    }
}

const Posts = (
    {posts, subtitle}: {posts: IPost[], subtitle: string}
    ) => {
    // console.log(subtitle)
    // console.log(posts)
    return (
        <MainLayout headTitle="Next 01 - Posts">
            <div>
                <h1>Posts</h1>
                <h2>
                    {/*subtitle*/}
                    {subtitle}
                </h2>
                {
                    posts &&
                    <div className={style.posts}>
                        {/*posts*/}
                        {
                            posts.map(post => (
                                <div key={post.id} className={style.post}>
                                    {/*<p className={style.title}>{post.title}</p>*/}
                                    <Link href={`/posts/${post.id}`}><a>{post.title}</a></Link>
                                    {/*<p className={style.text}>{post.text}</p>*/}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </MainLayout>
    )
}
export default Posts