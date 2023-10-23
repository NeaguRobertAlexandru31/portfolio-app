import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  private selectedItems: string[] = [];

  addToCart(item: string){
    this.selectedItems.push(item);
    console.log("ok", item);
  }

  getSelectedItems(){
    return this.selectedItems;
  }

  constructor() { }
}
