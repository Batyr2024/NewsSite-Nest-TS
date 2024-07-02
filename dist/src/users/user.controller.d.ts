import { CreateUserData } from './data/CreateUser.data';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(id: string): Promise<import("./models/user.model").User>;
    registerUser(registrationData: CreateUserData): Promise<import("./models/user.model").User>;
    getAuthenticatedUser(login: string): Promise<void>;
}
