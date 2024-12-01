import { faker } from '@faker-js/faker';
import createHash from './bcrypt.js';

export const generateUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const userRole = faker.helpers.arrayElement(['user', 'admin']); // Correcta forma de acceso

        users.push({
            _id: faker.database.mongodbObjectId(),  // Generación de MongoDB ObjectId
            name: faker.person.firstName(),  // Correcta forma de obtener el primer nombre
            email: faker.internet.email(),  // Correcta forma de obtener un correo
            password: createHash(faker.internet.password()),  // Usando bcrypt.js para la contraseña
            role: userRole,  // Generación de rol aleatorio
            pets: [],
        });
    }
    return users;
};

export const generatePets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            _id: faker.database.mongodbObjectId(),  // Generación de MongoDB ObjectId
            name: faker.person.firstName(),  // Nombre aleatorio de mascota
            type: faker.helpers.arrayElement(['dog', 'cat', 'bird']),  // Correcta forma de obtener un tipo aleatorio
            age: faker.number.int({ min: 1, max: 15 }),  // Generación de edad entre 1 y 15
        });
    }
    return pets;
};
