import { Injectable } from "@nestjs/common";
import { TagsPosts } from "./tags-posts.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TagsPostsService {
    constructor(@InjectModel(TagsPosts) private tagsPostsRepository: typeof TagsPosts){}

    async createAssociationTags
}