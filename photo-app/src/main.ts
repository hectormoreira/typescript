import { Album } from "./album";
import { PhotoOrientation } from "./photoOrientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'onepiece', 'Dragon', true);
const album = new Album(1, 'Platzi Pictures');
const picture = new Picture(2,"TS Course", "2021-03", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

// Borramos album
user.removeAlbum(album);
console.log('user', user);