console.log('Hola from main');

//Number
// Tipo Explícito
let phone: number;
phone = 1;
phone = 5123456;
// phone = "dddd"; //Error

// Tipo Inferido
let phoneNumber = 5123456;
phoneNumber = 34344;
//phoneNumber = true; // Error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Estos valore se usan desde ES6 ⬆

/*********************/
// Tipo Boolean: true o false
let isPro: boolean;
isPro = false;
//isPro = 1; //error

// Tipo inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 2; //error por tipo de dato

/********************/
//Tipo string
let userName: string = "monkeyd";
userName = "MonkeyD";
//userName =  true; //error

// Template string - back-tick ``
let userInfo: string;
userInfo = `
    User Info:
    username: ${userName}
    firsName: ${userName + ' Dragon'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo ', userInfo)



