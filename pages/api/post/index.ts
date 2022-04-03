import {NextApiRequest, NextApiResponse} from "next";
import {IPost, postsDB} from "../../../db/PostsDB";

type DataType = IPost[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataType>
) {
    const posts = postsDB.getAll();
    res
        .status(200)
        .json(posts)
}