import { PostService } from './post.service';
import { CreatePostData } from './data/CreatePost.data';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createPost(postObject: CreatePostData): Promise<string>;
    getAllPosts(): Promise<object>;
}
