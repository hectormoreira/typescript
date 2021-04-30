export {};
// Funcion para mostrar una Fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[
        title: ${picture.title},
        date: ${picture.date},
        orientacion: ${picture.orientation}
    ]`);
}

let myPic = {
  title: "Test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);

//objeto anonimo
showPicture({
  title: "Test Title",
  date: "2020-03",
  orientation: PhotoOrientation.Portrait,
  //extra: 'test' //error
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "default", date: "2020-03" };
  if (config.title) {
    pic.title = config.title;
  }

  if (config.date) {
    pic.date = config.date;
  }
  return pic;
}

let picture = generatePicture({});
console.log("picture", picture);

picture = generatePicture({ title: "Travel Pic" });
console.log("picture", picture);

picture = generatePicture({ title: "Travel Pic", date: "2022-02" });
console.log("picture", picture);

// Interfaz: Usuario
interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User;

user = {
  id: 10,
  username: "onepiece",
  isPro: true,
};
console.log('user', user);
user.username = 'dragon';
//user.id = 20; // error compilador
console.log('user', user);
