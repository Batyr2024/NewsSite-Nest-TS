import { Model } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";
interface TagCreation {
    id: number;
    nameTag: string;
}
export declare class Tag extends Model<Tag, TagCreation> {
    id: number;
    nameTag: string;
    post: Post[];
}
export {};
