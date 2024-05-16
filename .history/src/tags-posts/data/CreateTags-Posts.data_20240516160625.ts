import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTags {
    @IsNotEmpty() 
    @IsNumber()
    readonly idPosts: number;
    readonly idTags: number;
}