import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    readonly id?:
    readonly nameTag: string;
}