import { IsNotEmpty, IsString } from "class-validator";
import { Tag } from "../models/tag.model";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    readonly id?:number;
    readonly nameTag: string;
}