export {};
// [1, 'user']
let user: [number, string];
user = [1, "onepiece"];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores

// id, username, isPro
let userInfo:[number, string, boolean];
userInfo = [2, 'mugiwara', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1,'onepiece']); //0
array.push([2,'mugiwara']); //1
array.push([3,'akagami']); //2
console.log('array', array);

// Funciones de la clase Array
// akagami -> akagami001
array[2][1] = array[2][1].concat('001'); //akagami001
console.log('array', array);
