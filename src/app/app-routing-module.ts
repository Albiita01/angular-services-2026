import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PlantillaFuncionMultipleComponent } from './plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

const routes: Routes = [
  { path: "", component: ComicsComponent },
  { path: "personas", component: PersonasApiComponent },
  { path: "coches", component: CochesApiComponent },
  { path: "plantilla", component: PlantillaFuncionSimpleComponent },
  { path: "plantillamultiple", component: PlantillaFuncionMultipleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
