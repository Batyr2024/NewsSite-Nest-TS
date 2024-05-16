import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsNumber()
    readonly idPosts: number;
    readonly idTags: number;
}