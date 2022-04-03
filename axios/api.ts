import axios from "axios";

export interface IInfo {
    count: number
    pages: number
    prev: string | null
    next: string | null
}

interface IOrigin {
    name: string
    url: string
}

export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: IOrigin
    location: IOrigin
    image: string
    episode: string[]
    url: string
    created: string
}

export interface ICharactersData {
    info: IInfo
    results: ICharacter[]
}

export const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
    withCredentials: true,
});

export const charactersAPI = {
    async getCharacters(currentPage = 1) {
        let response = await instance.get<ICharactersData>(`character/?page=${currentPage}`);
        return response.data
    },
}