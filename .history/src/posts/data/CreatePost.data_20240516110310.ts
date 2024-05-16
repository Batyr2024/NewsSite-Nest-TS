import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostData {
    @IsNotEmpty() 
    @IsString()
    readonly content: string;
    readonly topic: string;
    readonly idPostUser: number;
    readonly tag? : Array<CreateTagData>;
}