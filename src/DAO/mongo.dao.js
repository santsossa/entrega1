export default class MongoDao{
    constructor(model){
        this.model= model;
    }

    async getAll(){
        try{
            return await this.model.find({});
        }catch(error){
            throw new Error(error);
        }
    }

    async getById(id){
        try{
            return await this.model.findByid(id);
        }catch (error){
            throw new Error(error);
        }
    }

    async create(obj){
        try{
            return await this.model.create(obj);
        }catch(error){
            throw new Error(error);
        }
    }

    async update(id, obj){
        try{
            return await this.model.findByidAndUpdate(id, obj, {ner:true});
        }catch(error){
            throw new Error(error);
        }
    }

    async delete(id){
        try{
            return await this.model.findByidAndDelete(id);
        }catch(error){
            throw new Error(error);
        }
    }
    async createMany(obj){
        try{
            return await this.model.insertMany(obj);
        }catch(error){
            throw new Error(error);
        }
    }
}