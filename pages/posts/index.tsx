import {GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage} from "next";
import {MainLayout} from "../../components/layouts/MainLayout";
import style from "./posts.module.scss"
import Link from "next/link";
import {charactersAPI, ICharactersData} from "../../axios/api";

export interface IPost {
    id: string
    title: string
    text: string
}

export const getStaticProps = async () => {
    const response = await fetch(
        process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/post"
        : `https://next-test-ochre-three.vercel.app/api/post`
    );
    const responseJSON = await response.json();
    const posts = responseJSON//.posts;

    const charactersData = await charactersAPI.getCharacters();

    const subtitle = String(process.env.SUBTITLE) ?? "Default Subtitle";
    //const subtitle = "Default Subtitle";
    //console.log(process.env.SUBTITLE)
    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts,
            subtitle,
            charactersData
        }
    }

}

interface IPostProps {
    posts: IPost[]
    subtitle: string
    charactersData: ICharactersData
}


const Posts = (
    {
        posts,
        subtitle,
        charactersData
    }: IPostProps
) => {
    console.log(subtitle);
    console.log(posts);
    console.log(charactersData);

    return (
        <MainLayout headTitle="Next 01 - Posts">
            <div>
                <h1>Posts</h1>
                <h2>
                    {/*subtitle*/}
                    {subtitle}
                </h2>
                {
                    posts ? (
                        <div className={style.posts}>
                            {
                                posts.map(post => (
                                    <div key={post.id} className={style.post}>
                                        <Link href={`/posts/${post.id}`}><a>{post.title}</a></Link>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>no posts</div>
                    )
                }
            </div>
        </MainLayout>
    )
}
export default Posts