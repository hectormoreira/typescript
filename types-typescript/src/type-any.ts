// Tipo explicito
let idUser: any;
idUser = 1; //number
idUser = '1' //string
console.log('idUser', idUser)

// Tipo inferido
let otherId;
otherId = 1;
otherId = '2';
console.log('otherId', otherId);

let surprise: any = "hello typescript";
//surprise.sayHello();// error
//
const res = surprise.substring(6);// puede ocurrir error en tiempo de ejecucion
console.log('res', res);
