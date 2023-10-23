import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartOpen: boolean = false;

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

}
