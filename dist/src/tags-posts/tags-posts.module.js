"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsPostsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tags_posts_model_1 = require("./models/tags-posts.model");
const tags_posts_service_1 = require("./tags-posts.service");
const post_model_1 = require("../posts/models/post.model");
const tag_model_1 = require("../tags/models/tag.model");
let TagsPostsModule = class TagsPostsModule {
};
exports.TagsPostsModule = TagsPostsModule;
exports.TagsPostsModule = TagsPostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([tag_model_1.Tag, post_model_1.Post, tags_posts_model_1.TagsPosts])
        ],
        controllers: [],
        providers: [tags_posts_service_1.TagsPostsService],
        exports: [tags_posts_service_1.TagsPostsService]
    })
], TagsPostsModule);
//# sourceMappingURL=tags-posts.module.js.map