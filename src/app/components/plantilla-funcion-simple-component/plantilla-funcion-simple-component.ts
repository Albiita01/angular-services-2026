import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
  public personas!: Array<Plantilla>;
  public funciones!: Array<string>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ) { }

  ngOnInit(): void {
    this._service.getFuncionesPlantilla().subscribe((response) => {
      this.funciones = response;
      this._cdr.detectChanges();
    })
  }

  async mostrarPlantilla(): Promise<void> {
    let funcion = this.selectFuncion.nativeElement.value;
    this.personas = await this._service.getPlantillaByFuncionAsync(funcion);
    this._cdr.detectChanges();
  }



  // Esto es lo mío (funciona)
  // public arrayFunciones!: Array<any>;
  // public arrayPlantilla: Array<Plantilla> = [];

  // constructor(
  //   private _cdr: ChangeDetectorRef,
  //   private _service: ServicePlantilla
  // ) { }

  // async mostrarPlantilla(funcion: string): Promise<void> {
  //   if (!funcion) return;
  //   this.arrayPlantilla = await this._service.getPlantillaFuncion(funcion);
  //   this._cdr.detectChanges();
  // }

  // async ngOnInit(): Promise<void> {
  //   this.arrayFunciones = await this._service.getFunciones();
  //   this._cdr.detectChanges();
  // }
}

