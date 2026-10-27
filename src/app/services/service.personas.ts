import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/Persona";
import { Global } from "../Global";
import { environment } from "../../environments/environment.development";


@Injectable()
export class ServicePersonas {
    // debemos recibir el objeto HttpClient en el constructor
    constructor(private _http: HttpClient) { }

    // Tenems dos opciones para trabajar
    // Devolver la petición o devolver una proesa
    // devolvemos la petición a la llamada utilizando Observable
    getPersonas(): Observable<any> {
        // esto para el Environment
        let urlApi = environment.urlApiPersonas;
        return this._http.get(urlApi);

        // Esto para el Global
        // let urlApi = Global.urlApiPersonas;
        // return this._http.get(urlApi);
    }

    getPersonasPromise(): Promise<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        let promise = new Promise((resolve) => {
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }
}