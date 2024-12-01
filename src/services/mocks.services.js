import UserDaoMongo from "../DAO/user.dao.js";
import PetsDaoMongo from "../DAO/pets.dao.js";
import { generatePets, generateUsers } from "../utils/mocking.js";

const petsDao = new PetsDaoMongo();
const userDao = new UserDaoMongo();

export default class MockService {
    constructor() {
        this.petsDao = petsDao;   
        this.userDao = userDao;
    }

   
    async petsResgister(count) {
        try {
            const pets = generatePets(count);  
            const result = await this.petsDao.createMany(pets); 
            return result;  
        } catch (error) {
            console.error("Error en petsResgister:", error);
            throw new Error("Error al registrar mascotas");
        }
    }

    async usersResgister(count) {
        try {
            const users = generateUsers(count);  
            const result = await this.userDao.createMany(users);  
            return result;  
        } catch (error) {
            console.error("Error en usersResgister:", error);
            throw new Error("Error al registrar usuarios");
        }
    }

    async petsResgisterget() {
        try {
            const pets = await this.petsDao.getAll();  
            return pets;  
        } catch (error) {
            console.error("Error en petsResgisterget:", error);
            throw new Error("Error al obtener las mascotas");
        }
    }

    async usersResgisterget() {
        try {
            const users = await this.userDao.getAll(); 
            return users;  
        } catch (error) {
            console.error("Error en usersResgisterget:", error);
            throw new Error("Error al obtener los usuarios");
        }
    }

 
    async petsResgisterNon() {
        try {
            const count = 50;  
            const pets = generatePets(count);  
            return pets; 
        } catch (error) {
            console.error("Error en petsResgisterNon:", error);
            throw new Error("Error al generar las mascotas no persistidas");
        }
    }

    async usersResgisterNon() {
        try {
            const count = 50;  
            const users = generateUsers(count);  
            return users;  
        } catch (error) {
            console.error("Error en usersResgisterNon:", error);
            throw new Error("Error al generar los usuarios no persistidos");
        }
    }
}
