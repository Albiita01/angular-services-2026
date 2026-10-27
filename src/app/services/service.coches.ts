import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { }

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}