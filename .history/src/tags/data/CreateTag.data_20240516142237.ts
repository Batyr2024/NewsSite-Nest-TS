import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    readonly id?:number;
    readonly nameTag: string;
}