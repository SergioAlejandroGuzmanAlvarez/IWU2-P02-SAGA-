import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
  ]
  constructor() {this.filteredProducts = this.products;}
  public filteredProducts: { name: string, price: number, type: string }[];
  filterProducts(type: string) {
    if (type === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.type === type);
    }
  }
  getColor(type: String) : string{
    let color = "";

    switch(type){
      case "abarrotes":
        color = "primary";
        break;
      case "limpieza":
        color = "success";
        break;
      case "mascotas":
        color = "warning";
        break;  
      default:
        break;
    }
    return color;
  }
}
