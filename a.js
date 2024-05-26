const { faker } = require('@faker-js/faker');
console.log(faker.internet.email()) 
console.log(faker.internet.ip())  
const invalidEmail = faker.internet.email().replace('@', '');
console.log(invalidEmail) 