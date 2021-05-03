import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, 'onepiece', 'Dragon', true);
const album = new Album(1, 'Platzi Pictures');
const picture = new Picture(2,"TS Course", "2021-03", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);