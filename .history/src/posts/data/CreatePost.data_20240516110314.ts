import { IsNotEmpty, IsString } from "class-validator";
import { CreateTagData } from "src/tags/data/CreateTag.data";

export class CreatePostData {
    @IsNotEmpty() 
    @IsString()
    readonly content: string;
    readonly topic: string;
    readonly idPostUser: number;
    readonly tag? : Array<CreateTagData>;
}