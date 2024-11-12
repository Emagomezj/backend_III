import { fakerES_MX as faker } from "@faker-js/faker";
import { USER } from "../../constants/roles.constant.js"

export const generateSingleUser = () => {
    const user = {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        password: "coder123",
        roles: [USER],
        pets: [],
      };
    return user;
}

export const generateSinglePet = () => {
    const fakeBirthDate = faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 })
    const pet = {
        name: faker.person.firstName(),
        specie: faker.animal.type(),
        birthDate: fakeBirthDate.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
    }
    return pet
}

export const generateUsersMock = (amount) => {

    const users = [];
    for(let i = 0; i < amount; i++) {
        const user = {
          name: faker.person.firstName(),
          surname: faker.person.lastName(),
          email: faker.internet.email(),
          password: "coder123",
          roles: [USER],
          pets: [],
        };
        users.push(user);
    }

  return users;
};


export const generatePetsMock = (amount) => {
    const pets = []
    for(let i=0;i < amount; i++) {
        const pet = {
            name: faker.person.firstName(),
            specie: faker.animal.type(),
            birthDate: faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 })
        };
        pets.push(pet)
    };
    return pets;
};