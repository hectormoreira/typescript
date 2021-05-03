// definir funciones para app de fotografias

//Void
//Tipo explicito
function showInfo(user: any) {
  console.log("User Info", user.id, user.name, user.firstName);
  //return 'hola'
}

showInfo({ id: 1, userName: "onepiece", firstName: "Luffy" });

// Tipo Inferido
function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
        id: ${user.id}
        userName: ${user.userName}
        firstName: ${user.firstName}
    `
  );
}

showFormattedInfo({ id: 1, userName: "onepiece", firstName: "Luffy" });

// tipo void como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

// Tipo: Never

function handleError(code: number, message: string): never {
  // proceso para error
  // se genera respuesta
  throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {    
}

// Otro ejemplo con never
function sumNumber(limit:number): never {
    let sum = 0;
    while(true){
        sum++;
    }
    // return sum; // no existe retorno
}
sumNumber(10);//ciclo infinito