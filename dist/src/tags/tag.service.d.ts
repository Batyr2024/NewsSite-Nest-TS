import { Tag } from './models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: typeof Tag);
    searchTags(userTags: Array<CreateTagData>): Promise<CreateTagData[]>;
    checkForAvilabilityTags(userTags: Array<CreateTagData>): Promise<any[]>;
}
