export {};
// <tipo> // Angle Bracket syntax
let username: any;
username = "onepiece";

// Tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';

console.log('message', message);


let usernameWithId: any = 'akagami 1';
// get username ?
username = (<string>usernameWithId).substring(0,7);
console.log('username only',username);

// Sintaxis "as"
message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';

let helloUser: any;
helloUser = "Hello nakama";
username = (helloUser as string).substring(6);
console.log('username', username);

