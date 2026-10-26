import { ChangeDetectorRef, OnInit, Component } from '@angular/core';
import { ServiceComics } from '../../services/ServiceComics';
import { Comic } from '../../models/Comic.js'

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent {
  public arrayComics!: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceComics) { }


  async ngOnInit(): Promise<void> {
    this.arrayComics = await this._service.getComicsAsync();
    this._cdr.detectChanges();

  }


  // El que estaba antes sin el async
  // ngOnInit(): void {
  //   this._service.getComics().then(data => {
  //     this.arrayComics = data;
  //     this._cdr.detectChanges();
  //   })
  // }
}
