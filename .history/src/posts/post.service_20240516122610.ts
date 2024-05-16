import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { Post } from './models/post.model';
import { TagService } from 'src/tags/tag.service';
import { TagsPostsService } from 'src/tags-posts/tags-posts.service';
import { Tag } from 'src/tags/models/tag.model';
import { elementAt } from 'rxjs';
import { where } from 'sequelize';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,private tagService:TagService,private tagsPostsService:TagsPostsService) { }

    async createPost(postObject:CreatePostData,){
        try{
            const userTags = postObject.tag;
            userTags.forEach(async (element)=>{ await this.tagService.findOne({where:{}})})
            const post = await this.postRepository.create(postObject,{include: [{ model: Tag }]});
            const tag = this.tagService.checkForAvilabilityTags(postObject.tag);
            return 'Post was successfully created';
                 
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
