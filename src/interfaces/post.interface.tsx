import { IAuthor } from "./author.interface";

export interface IPost {
    id: number;
    author: IAuthor;
    title: string;
    img: string;
    tag: string;
}
