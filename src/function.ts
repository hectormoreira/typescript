export {};
// Crear fotografia
// function createPicture(title, date, size) {
//     //title
// }

type SquareSize = "100x100" | "500x500" | "1000x1000";
// Usar TS y definir tipos para parametros
// function createPicture(title:string, date: string, size:SquareSize) {
//     // Se crea la Fotografia
//     console.log("createPicture using", title, date, size);
// }

// createPicture("My Birthday", "2020-03-10", "500x500");
//createPicture("Colombia Trip", "2020-03-05");

// Parametros opcionales en funciones

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la Fotografia
  console.log("createPicture using", title, date, size);
}
createPicture("My Birthday", "2020-03-10", "500x500");
createPicture("Colombia Trip", "2020-03-05");
createPicture("Colombia Trip");
createPicture();

// Flat array function
let createpic = (title: string, date: string, size: SquareSize): object => {
    return { title, date, size }
};

const picture = createpic('Platzi Session','2020-03-10', '100x100');
console.log('picture', picture);


// Tipo de retorno con TS

function handleError(code:number, message: string): never | string {
  // Procesamiento del codigo, mensaje
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  }else{
    return 'An error has occurred';
  }
}


try {
  let result = handleError(200, 'OK');
  console.log('result', result);
  
  result = handleError(404, 'error');
  console.log('result', result);

} catch (error) {}