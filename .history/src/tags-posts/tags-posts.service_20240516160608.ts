import { Injectable } from "@nestjs/common";
import { TagsPosts } from "./tags-posts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePostData } from "src/posts/data/CreatePost.data";

@Injectable()
export class TagsPostsService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts){}

    async createAssociationTagsPosts(postId:number,tagsId:Array<number>){
        const tagsPosts:Array<Create> = []
        tagsId.map((element:number)=> tagsPosts.push({idPosts:postId,idTags:element}))
        await this.tagsPostsRepository.bulkCreate()
    }
}