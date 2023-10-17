import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizze-rosse',
  templateUrl: './pizze-rosse.component.html',
  styleUrls: ['./pizze-rosse.component.css'],
})
export class PizzeRosseComponent implements OnInit {
  cards: Meal[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Meal[]>('./assets/pizze-rosse.json').subscribe((data) => {
      this.cards = data;
    });
  }
}
