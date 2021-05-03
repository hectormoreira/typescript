// Corchetes []

// explixito
let users: string[];
users = ["luffy", "nami", "robin"];
//users = [1, true, 'robin']; // error de tipo

// tipo inferido
let otherUsers = ["luffy", "nami", "robin"];
//otherUsers = [1, true, 'robin']; // error de tipo

// Array<TIPO>
let pictureTitle: Array<string>;
pictureTitle = ["Favorite Sunset", "Vacation Time", "Landscape"];

// Accediendo en valores de un Array
console.log("First user", users[0]);
console.log("First title", pictureTitle[0]);

// Propiedades
console.log("users.length", users.length);

// uso de funciones en array
users.push("platziuser");
users.sort();
console.log("users", users);
