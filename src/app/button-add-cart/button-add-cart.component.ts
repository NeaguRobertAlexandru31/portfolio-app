import { Component, Input } from '@angular/core';
import { Meal } from '../meal.interface';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-button-add-cart',
  templateUrl: './button-add-cart.component.html',
  styleUrls: ['./button-add-cart.component.css']
})
export class ButtonAddCartComponent {

  @Input() item: Meal;

  constructor(private cartDataService: CartDataService){
    this.item = {} as Meal;
  }

  addToCart(){
    if(this.item){
      this.cartDataService.addToCart(this.item.title);
    }
  }

}
