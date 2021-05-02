export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// get y set

class Picture {
  // Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(o: PhotoOrientation) {
    this._orientation = o;
  }

  // Comportamiento
  public toString() {
    return `[
                id: ${this._id},
                title: ${this._title},
                orientation: ${this._orientation}
            ]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(t: string) {
    this._title = t;
  }

  public addPicture(pic: Picture) {
    this._pictures.push(pic);
  }
}

const album: Album = new Album(1, "Personal Picture");
const picture: Picture = new Picture(
  1,
  "Platzi session",
  PhotoOrientation.Square
);
album.addPicture(picture);

console.log("album", album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // get id()
picture.id = 100; // private, set id(100)
picture.title = "Another title"; // private
album.title = "Personal Activities"; //private
console.log("album", album);
