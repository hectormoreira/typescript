// Tipo Null
//Explicita
let nullVariable: null;
nullVariable = null;
//nullVariable = 1; //error

let otherVariable = null; // se convierte en any
otherVariable = "test";

console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

// Tipo undefined
let undefinedVariable: undefined = undefined;
//undefinedVariable = 'test'; //error

let otherUndefined = undefined; //infiere como Any
otherUndefined = 3;
console.log('undefinedVariable', undefinedVariable);
console.log('otherVariable', otherVariable);


// Null y Undefined: Como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
