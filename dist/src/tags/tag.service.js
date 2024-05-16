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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tag_model_1 = require("./models/tag.model");
const post_model_1 = require("../posts/models/post.model");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async searchTags(userTags) {
        let newTags = [];
        await this.tagRepository.findAll()
            .then((data) => {
            let dataNameTag = [];
            data.forEach((element) => dataNameTag.push(element.dataValues.nameTag));
            userTags.forEach((element) => {
                if (dataNameTag.includes(element.nameTag) === false) {
                    newTags.push(element);
                }
            });
        })
            .catch((error) => { `ERROR: ${error}`; });
        return newTags;
    }
    async checkForAvilabilityTags(userTags) {
        let dataTags = [];
        await this.searchTags(userTags)
            .then(async (data) => {
            if (data.length !== 0) {
                await this.tagRepository.bulkCreate(data);
            }
            const allStatus = await Promise.all(userTags.map(async (element) => {
                await this.tagRepository.findOne({ where: { nameTag: element.nameTag } })
                    .then(async (data) => {
                    await this.tagRepository.findByPk(data.id, { include: [{ model: post_model_1.Post }] });
                    dataTags.push(data.dataValues.id);
                    return dataTags;
                });
            }));
        })
            .catch((error) => error);
        return dataTags;
    }
};
exports.TagService = TagService;
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(tag_model_1.Tag)),
    __metadata("design:paramtypes", [Object])
], TagService);
//# sourceMappingURL=tag.service.js.map