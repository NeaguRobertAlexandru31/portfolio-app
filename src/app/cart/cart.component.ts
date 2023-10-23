import { Component } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  selectedItems: string[];

  constructor(private cartDataService: CartDataService) {
    this.selectedItems = cartDataService.getSelectedItems();
  }

  removeFromCart(item: string) {
    this.cartDataService.removeFromCart(item);
  }
}
