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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsPosts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const post_model_1 = require("../../posts/models/post.model");
const tag_model_1 = require("../../tags/models/tag.model");
let TagsPosts = class TagsPosts extends sequelize_typescript_1.Model {
};
exports.TagsPosts = TagsPosts;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, allowNull: false, primaryKey: true }),
    __metadata("design:type", Number)
], TagsPosts.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => post_model_1.Post),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], TagsPosts.prototype, "idPosts", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tag_model_1.Tag),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], TagsPosts.prototype, "idTags", void 0);
exports.TagsPosts = TagsPosts = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'tags_posts' })
], TagsPosts);
//# sourceMappingURL=tags-posts.model.js.map