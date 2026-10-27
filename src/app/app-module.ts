import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/ServiceComics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { ServicePlantilla } from './services/service.plantilla';
import { PlantillaFuncionMultipleComponent } from './plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule { }
