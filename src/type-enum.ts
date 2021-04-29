// Orientacion para Fotogracias
// Clasico ⬇
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

// TS Enum
enum PhotoOrientation{
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

enum Country {
    Ecuador = 'ecu',
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex'
}
const country: Country = Country.Ecuador;
console.log('country', country);