import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Eric';
  item =
  [
    {
      nama : 'Buah kelengkeng',
      harga : 10000
    },
    {
      nama : 'jeruk',
      harga : 15000
    }
  ]
  user = 
  
    {
      nama : ''
    };
  
  itemArr = [1,2,3,4];
  show : boolean = true;
  Pesan = '';
  KlikButton()
  {
    this.Pesan = 'Tombol Ditekan'
  }
}
