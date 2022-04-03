import {NextApiRequest, NextApiResponse} from "next";
import {IPost, postsDB} from "../../../db/PostsDB";

interface IData {
    posts: IPost[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IData>
) {
    const posts = postsDB.getAll();
    res
        .status(200)
        .json({ posts })
}