import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private tagRepository: typeof Tag) { }

    async searchTags(userTags:Array<string>){
        let newTags:Array<string> = []; 
        await this.tagRepository.findAll()
        .then((data)=>{
            let dataIdTag:Array<number> = [];
            let dataNameTag:Array<string> = []
            data.forEach((element)=> {dataNameTag.push(element.dataValues.nameTag));
            userTags.forEach((element:string) => {
                if(dataNameTag.includes(element) === false){
                    newTags.push(element)
                }
                });
        })
        .catch((error)=>`ERROR: ${error}`);
        return { newTags, idTags };
    }

    async checkForAvilabilityTags(userTags:Array<string>){
        this.searchTags(userTags)
        .then(async (data)=> {
            if(data.length !== 0){await this.tagRepository.bulkCreate(data.newTags)}
        })
        .catch((error)=>`ERROR: ${error}`);
    }
}
