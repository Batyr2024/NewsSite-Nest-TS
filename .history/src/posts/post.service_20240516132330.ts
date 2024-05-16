import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostData } from 'src/posts/data/CreatePost.data';
import { Post } from './models/post.model';
import { TagService } from 'src/tags/tag.service';
import { TagsPostsService } from 'src/tags-posts/tags-posts.service';
import { Tag } from 'src/tags/models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';


@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,private tagService:TagService,private tagsPostsService:TagsPostsService) { }

    async createPost(postObject:CreatePostData){
        try{
            await this.tagService.checkForAvilabilityTags(postObject.tag)
            .then((re))
            .then(async (data:Array<CreateTagData>)=>{
                postObject.tag = data;
                console.log(data)
                await this.postRepository.create(postObject,{include: [{ model: Tag }]});
                return 'Post was successfully created';
        })
                 
        }catch(error){
            return `ERROR: ${error}`;
        }
    }

}
