import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostData } from './data/CreatePost.data';
import { TagService } from 'src/tags/tag.service';

@Controller('post')
export class PostController {
    constructor (private postService: PostService){}

    @Post('/create')
    createPost(@Body()postObject:CreatePostData){
        return this.postService.createPost(postObject);
    }
}