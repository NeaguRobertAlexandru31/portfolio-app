import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-focacce',
  templateUrl: './focacce.component.html',
  styleUrls: ['./focacce.component.css'],
})
export class FocacceComponent implements OnInit {
  cards: Meal[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Meal[]>('./assets/focacce.json').subscribe((data) => {
      this.cards = data;
    });
  }
}
