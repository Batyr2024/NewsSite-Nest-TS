import { TagsPosts } from "./tags-posts.model";
export declare class TagsPostsService {
    private tagsPostsRepository;
    constructor(tagsPostsRepository: typeof TagsPosts);
    createAssociationTagsPosts(postId: number, tagsId: Array<number>): Promise<any>;
}
