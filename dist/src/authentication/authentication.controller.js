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
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const CreateUser_data_1 = require("../users/data/CreateUser.data");
const authentication_service_1 = require("./authentication.service");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async addNewUser(data, res) {
        const userJwt = await this.authenticationService.register(data);
        if (userJwt instanceof common_1.UnauthorizedException)
            return userJwt;
        res.set('x-access-token', userJwt.refresh);
        return userJwt;
    }
    async getByLogin(data, res) {
        const userJwt = await this.authenticationService.getAuthenticatedUser(data);
        if (userJwt instanceof common_1.UnauthorizedException)
            return userJwt;
        res.set('x-access-token', userJwt.access_token);
        return userJwt.user;
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_data_1.CreateUserData, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "addNewUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_data_1.CreateUserData, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getByLogin", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map