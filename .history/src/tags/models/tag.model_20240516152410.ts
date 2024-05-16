import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/models/post.model";
import { TagsPosts } from "src/tags-posts/tags-posts.model";

interface TagCreation {
    id: number;
    nameTag: string;
}



@Table({tableName:'tag'})
export class Tag extends Model <Tag, TagCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING})
    nameTag: string;

    @BelongsToMany(()=>Post,()=>TagsPosts)
    post:Post[];
}