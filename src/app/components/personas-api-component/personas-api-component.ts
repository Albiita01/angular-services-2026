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

  ngOnInit(): void {
    // Si devolvemos un OBservable con la petición, nos suscribimos a su promesa
    this._service.getPersonas().subscribe((response) => {
      console.log("Leyendo personas")
      this.personas = response;
      this._cdr.detectChanges();
    })
  }
}
