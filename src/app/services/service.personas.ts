import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    // debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) { }

    // Tenems dos opciones para trabajar
    // Devolver la petición o devolver una proesa
    // devolvemos la petición a la llamada utilizando Observable
    getPersonas(): Observable<any> {
        let urlApi = "";
        return this._http.get(urlApi);
    }
}