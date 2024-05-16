import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagData {
    @IsNotEmpty() 
    @IsString()
    @ForeignKey(()=>Post)
    @Column({type:DataType.INTEGER})
    idPosts: number;

    @ForeignKey(()=>Tag)
    @Column({type:DataType.INTEGER})
    idTags: number;
}