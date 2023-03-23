import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public products: { name: string, price: number, type: string }[] = [
    { name:"Coca Cola 600ml",price:20,type:"abarrotes" },
    { name: 'Pepsi 600ml', price: 20, type: 'abarrotes' },
    { name: 'Queso cotija', price: 30, type: 'abarrotes' },
    { name: 'Croquetas Pedigree', price: 40, type: 'mascotas' },
    { name: 'Whiskas', price: 20, type: 'mascotas' },
    { name: 'Alpiste', price: 13, type: 'mascotas' },
    { name: 'Fabuloso', price: 25, type: 'limpieza' },
    { name: 'Cloro', price: 25, type: 'limpieza' },
    { name: 'Pinol', price: 20, type: 'limpieza' },
  ];
  constructor() {}
  etColor(type: String) : string{
    let color = "";

    switch(type){
      case "Abarrotes":
        color = "primary";
        break;
      case "Limpieza":
        color = "success";
        break;
      case "Mascotas":
        color = "warning";
        break;  
      default:
        break;
    }
    return color;
  }
}
