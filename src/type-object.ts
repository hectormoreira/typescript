//Tipo object
//Explicito
let user: object ;
user = { }

user = {
    id: 1,
    username: 'onepiece',
    firstName: 'Luffy',
    isPro: true,
}

console.log("user", user);

// Object vs object
const myObj = {
    id: 1,
    username: 'onepiece',
    firstName: 'Luffy',
    isPro: true,
}

const isIntance = myObj instanceof Object; // Clase Object de js
console.log('isIntance', isIntance);
console.log("myObj.username", myObj.username);

