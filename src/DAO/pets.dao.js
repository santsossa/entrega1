import MongoDao from "./mongo.dao.js";
import { PetsModel } from "./models/pets.model.js";

export default class PetsDaoMongo extends MongoDao {
    constructor(){
        super(PetsModel)
    }
}