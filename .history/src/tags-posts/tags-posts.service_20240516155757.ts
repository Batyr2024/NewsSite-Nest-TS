import { Injectable } from "@nestjs/common";
import { TagsPosts } from "./tags-posts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePostData } from "src/posts/data/CreatePost.data";

@Injectable()
export class TagsPostsService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts){}

    async createAssociationTagsPosts(postObject:CreatePostData){
        await this.tagsPostsRepository.create()
    }
}