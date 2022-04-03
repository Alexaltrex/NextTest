import {postsMock} from "./posts.mock";

export interface IPost {
    id: string
    title: string
    text: string
}

export interface IPosts {
    [key: string]: IPost
}

class PostsDB {
    private _posts: IPosts  = postsMock

    public getAll(): IPost[] {
        return [...Object.values(this._posts)]
    }

    public getById(id: string): IPost {
        return this._posts[id]
    }
}
export const postsDB = new PostsDB();