import { CreateTagData } from "src/tags/data/CreateTag.data";
export declare class CreatePostData {
    readonly content: string;
    readonly topic: string;
    readonly idPostUser: number;
    tag?: Array<CreateTagData>;
}
