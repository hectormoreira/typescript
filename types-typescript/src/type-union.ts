export {};
// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username dado un ID
// function getUsernameById(id:number | string) {
//     // code
//     return 'onepiece';
// }

// getUsernameById(20);
// getUsernameById('20');

// Alias de tipos TS
type IdUser = number | string;
type UserName = string;

let idUser: IdUser;
idUser = 10;
idUser = "10";

// Buscar username dado un ID
function getUsernameById(id: IdUser): UserName {
  // code
  return "onepiece";
}

getUsernameById(20);
getUsernameById("20");

// Tipos Literales
// 100x100, 500x500, 1000x1000

type SquareSize = "100x100" | "500x500" | "1000x1000";
//let smallPicture: SquareSize = "100x1000"; //error
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";
