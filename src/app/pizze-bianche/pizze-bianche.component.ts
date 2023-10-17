import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizze-bianche',
  templateUrl: './pizze-bianche.component.html',
  styleUrls: ['./pizze-bianche.component.css'],
})
export class PizzeBiancheComponent implements OnInit {
  cards: Meal[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Meal[]>('./assets/pizze-bianche.json').subscribe((data) => {
      this.cards = data;
    });
  }
}
