import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsNu()
    readonly idPosts: number;
    readonly idTags: number;
}