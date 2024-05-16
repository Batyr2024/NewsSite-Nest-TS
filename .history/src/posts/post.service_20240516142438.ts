import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { Post } from './models/post.model';
import { TagService } from 'src/tags/tag.service';
import { TagsPostsService } from 'src/tags-posts/tags-posts.service';
import { Tag } from 'src/tags/models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';
import { response } from 'express';


@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,private tagService:TagService,private tagsPostsService:TagsPostsService) { }

    async createPost(postObject:CreatePostData){
        try{
            await this.tagService.checkForAvilabilityTags(postObject.tag)
                 
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
