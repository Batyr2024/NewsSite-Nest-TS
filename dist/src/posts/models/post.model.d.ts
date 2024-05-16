import { Model } from "sequelize-typescript";
import { Tag } from "src/tags/models/tag.model";
interface PostCreation {
    id: number;
    content: string;
    topic: string;
    idPostUser: number;
    idTags: number;
    picture: string;
}
export declare class Post extends Model<Post, PostCreation> {
    id: number;
    content: string;
    topic: string;
    idPostUser: number;
    picture: string;
    tag: Tag[];
}
export {};
