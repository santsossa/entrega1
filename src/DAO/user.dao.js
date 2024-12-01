import MongoDao from "./mongo.dao.js";
import { UsersModel } from "./models/users.model.js";

export default class UserDaoMongo extends MongoDao {
    constructor(){
        super(UsersModel)
    }
}