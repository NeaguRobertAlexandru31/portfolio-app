import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.interface';
import { HttpClient } from '@angular/common/http';
import { CartDataService } from '../cart-data.service';


@Component({
  selector: 'app-select-pizza',
  templateUrl: './select-pizza.component.html',
  styleUrls: ['./select-pizza.component.css']
})
export class SelectPizzaComponent {

  cards: Meal[] = [];

  constructor (private http: HttpClient, private cartDataService: CartDataService) {};

  addToCart(item: Meal){
    this.cartDataService.addToCart(item.title);
  }

}
