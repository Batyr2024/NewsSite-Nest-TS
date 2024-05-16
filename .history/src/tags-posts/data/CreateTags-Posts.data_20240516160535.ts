import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()

    idPosts: number;


    idTags: number;
}