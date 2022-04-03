import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext, InferGetServerSidePropsType,
    InferGetStaticPropsType,
    NextPage
} from "next";
import {useRouter} from "next/router";
import {MainLayout} from "../../components/layouts/MainLayout";
import {IPost} from "./index";
import {ParsedUrlQuery} from "querystring";
import Link from "next/link";
import {postsMock} from "../../db/posts.mock";

interface IParams extends ParsedUrlQuery {
    id: string
}

// 1 - getStaticPaths + getStaticProps
// export const getStaticPaths: GetStaticPaths = async () => {
//     //const response = await fetch(`${process.env.API_DEV}/posts`);
//     const posts: IPost[] = []; //await response.json();
//
//     const paths = posts.map((post) => ({
//         params: {
//             id: String(post.id)
//         },
//     }))
//
//     return {
//         paths,
//         fallback: false
//     }
// }
// export const getStaticProps: GetStaticProps = async (context) => {
//     const { id } = context.params as IParams
//
//     //const response = await fetch(`${process.env.API_DEV}/posts/${id}`);
//     const post: IPost = postsMock["1"] //await response.json();
//     return {
//         props: {
//             post
//         }
//     }
// }

// 2 - getServerSideProps
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const {id} = context.params as IParams
//     const response = await fetch(`{process.env.API_DEV}/posts/${id}`);
//     const post: IPost | null = await response.json();
//
//     if (!post) {
//         return {
//             notFound: true,
//         }
//     }
//
//     return {
//         props: {
//             post
//         }
//     }
// }

const Post = (
    // {post}: {post: IPost}
    ) => {
    //console.log(post);

    return (
        <MainLayout headTitle="Next 01 - Post">
            <div>
                <h2>
                    title
                    {/*{post.title}*/}
                </h2>
                <h3>
                    text
                    {/*{post.text}*/}
                </h3>
            </div>
            <Link href="/posts"><a>Back to posts</a></Link>
        </MainLayout>
    )
}
export default Post