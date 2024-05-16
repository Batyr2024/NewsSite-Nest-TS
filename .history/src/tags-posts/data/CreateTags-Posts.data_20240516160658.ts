import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTagsPostsData {
    @IsNotEmpty() 
    @IsNumber()
    readonly idPosts: number;
    readonly idTags: Array<number>;
}