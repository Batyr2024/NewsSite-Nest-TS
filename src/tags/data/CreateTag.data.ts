import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    readonly nameTag: Array<string>;
}
