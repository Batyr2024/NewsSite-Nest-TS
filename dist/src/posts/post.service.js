"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const post_model_1 = require("./models/post.model");
const tag_service_1 = require("../tags/tag.service");
const tags_posts_service_1 = require("../tags-posts/tags-posts.service");
const tag_model_1 = require("../tags/models/tag.model");
let PostService = class PostService {
    constructor(postRepository, tagService, tagsPostsService) {
        this.postRepository = postRepository;
        this.tagService = tagService;
        this.tagsPostsService = tagsPostsService;
    }
    async createPost(postObject) {
        try {
            const tagsId = await this.tagService.checkForAvilabilityTags(postObject.tag);
            await this.postRepository.create(postObject)
                .then(async (dataPost) => {
                await this.tagsPostsService.createAssociationTagsPosts(dataPost.id, tagsId);
            });
            return 'Post was successfully created';
        }
        catch (error) {
            return `ERROR: ${error}`;
        }
    }
    async getPostsAll() {
        return await this.postRepository.findAll({ include: [tag_model_1.Tag] });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(post_model_1.Post)),
    __metadata("design:paramtypes", [Object, tag_service_1.TagService, tags_posts_service_1.TagsPostsService])
], PostService);
//# sourceMappingURL=post.service.js.map