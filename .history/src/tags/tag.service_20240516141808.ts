import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';
import { Post } from 'src/posts/models/post.model';
import { error } from 'console';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private tagRepository: typeof Tag) { }

    async searchTags(userTags:Array<CreateTagData>){
        let newTags:Array<CreateTagData> = []; 
        await this.tagRepository.findAll()
        .then((data)=>{
            let dataNameTag:Array<string> = []
            data.forEach((element)=> dataNameTag.push(element.dataValues.nameTag));
            userTags.forEach((element) => {
                if(dataNameTag.includes(element.nameTag) === false){
                    newTags.push(element)
                }
                });
        })
        .catch((error)=>{`ERROR: ${error}`});
        return newTags;
    }

    async checkForAvilabilityTags(userTags:Array<CreateTagData>){
        let dataTags = [];
        await this.searchTags(userTags)
        .then(async (data)=> {
            if(data.length !== 0){ 
                await this.tagRepository.bulkCreate(data);
            }
            const allStatus = await Promise.all(userTags.map(async (element)=>{
                await this.tagRepository.findOne({where:{nameTag:element.nameTag}})
                .then(async (data)=>{
                    await this.tagRepository.findByPk(data.id,{ include: [{ model: Post }] });
                    dataTags.push(data.dataValues);
                    return dataTags;
                })
            }))
        })
        .catch((error)=>error);
        console.log(allS
        return dataTags;
    }
}
