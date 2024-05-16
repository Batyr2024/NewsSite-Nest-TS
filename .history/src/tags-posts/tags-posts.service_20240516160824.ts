import { Injectable } from "@nestjs/common";
import { TagsPosts } from "./tags-posts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePostData } from "src/posts/data/CreatePost.data";
import { CreateTagsPostsData } from "./data/CreateTags-Posts.data";

@Injectable()
export class TagsPostsService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts){}

    async createAssociationTagsPosts(postId:number,tagsId:Array<number>){
        try {
            const tagsPosts:Array<CreateTagsPostsData> = []
            tagsId.map((element:number)=> tagsPosts.push({idPosts:postId,idTags:element}));
            await this.tagsPostsRepository.bulkCreate(tagsPosts);   
        } catch (error) {return error}
    }
}