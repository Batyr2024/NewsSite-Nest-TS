import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    readonly idPosts: number;
    readonly idTags: number;
}