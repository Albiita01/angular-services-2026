import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas
  ) { }

  // Sin el Promise<void> era para lo anterior
  // ngOnInit(): void {
  async ngOnInit(): Promise<void> {

    // Si devolvemos un Observable con la petición, nos subscribimos a su promesa
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.error("Error en el aPI", error);
      }
    })

    // Async/Await
    // try {
    //   this.personas = await this._service.getPersonasAsync();
    //   this._cdr.detectChanges();
    // } catch (error) {
    //   console.log("Error en el API", error);
    // }

    // Promise
    // this._service.getPersonasPromise().then((response) => {
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // }).catch((error: any) => {
    //   console.error("Error en el Api", error);

    // })

    // Esto era lo anterior
    // this._service.getPersonasPromise().then((response) => {
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // })

    // Esto era lo anterior anterior
    // Si devolvemos un OBservable con la petición, nos suscribimos a su promesa
    // this._service.getPersonas().subscribe((response) => {
    //   console.log("Leyendo personas")
    //   this.personas = response;
    //   this._cdr.detectChanges();
    // })
  }
}
