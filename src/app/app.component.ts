import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public monTitre = 'Mon super titre';
  public estCacher = true;
  public urlImage = 'https://www.fillmurray.com/200/200';
  public maValeur = 42;
}
