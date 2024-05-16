import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';
import { CreateTagData } from 'src/tags/data/CreateTag.data';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag) private tagRepository: typeof Tag) { }

    async searchTags(userTags:Array<string>){
        let newTags:Array<string> = []; 
        let idTags:Array<number> = [];
        await this.tagRepository.findAll()
        .then((data)=>{
            let dataIdTag:Array<number> = [];
            let dataNameTag:Array<string> = []
            data.forEach((element)=> {dataNameTag.push(element.dataValues.nameTag); dataIdTag.push(element.dataValues.id);});
            userTags.forEach((element:string) => {
                if(dataNameTag.includes(element) === false){
                    newTags.push(element)
                }else{
                    let tagIndexById = dataNameTag.findIndex((tag)=> tag===element );
                    idTags.push(dataIdTag[tagIndexById]);     
                }
                });
        })
        .catch((error)=>`ERROR: ${error}`);
        return { newTags, idTags };
    }

    async checkForAvilabilityTags(userTags:Array<string>){
        this.searchTags(userTags)
        .then(async (data)=> {
            if(data.newTags.length !== 0){
                await this.tagRepository.bulkCreate(data.newTags)
                .then((dataNewTags)=>{
                    dataNewTags.forEach((element)=>{
                        data.idTags.push(element.dataValues.id);

                    })
                })
                .catch((error)=>`ERROR: ${error}`);}
            if(data === undefined){
                console.log(data)
            }else{
                return data;}
        })
        .catch((error)=>`ERROR: ${error}`);
    }
}
