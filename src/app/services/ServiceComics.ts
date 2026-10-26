import { Comic } from "../models/Comic";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceComics {
  getComics(): Promise<Array<Comic>> {
    let path = "./assets/comics.json";
    return fetch(path).then(response => response.json())
      .then((data: any[]) => {
        let arrayComics: Array<Comic> = [];
        for (let elem of data) {
          //creamos un Comic de Angular 
          let comic: Comic = new Comic
            (elem.nombre, elem.imagen, elem.descripcion);
          arrayComics.push(comic);
        }
        console.log(arrayComics);
        return arrayComics;
      })
  }

  async getComicsAsync(): Promise<Array<Comic>> {
    let path = "./assets/comics.json";
    let response = await fetch(path);
    let data = await response.json();
    let arrayComics: Array<Comic> = [];
    for (let elem of data) {
      //creamos un Comic de Angular
      let comic: Comic = new Comic
        (elem.nombre, elem.imagen, elem.descripcion);
      arrayComics.push(comic);
    }
    console.log(arrayComics);
    return arrayComics;
  }
}