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
  Pesan = '';
  bil1 = 0;
  pangkat = 0;
  hasil = 0;
  KlikButton()
  {
    this.Pesan = 'Tombol Ditekan'
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
}
