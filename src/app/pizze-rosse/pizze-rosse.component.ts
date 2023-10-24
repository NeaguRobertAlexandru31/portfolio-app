import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.interface';
import { HttpClient } from '@angular/common/http';
import { CartDataService } from '../cart-data.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterPizzePipe } from '../filter-pizze.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-pizze-rosse',
  templateUrl: './pizze-rosse.component.html',
  styleUrls: ['./pizze-rosse.component.css'],
})
export class PizzeRosseComponent implements OnInit {

  searchTerm: string = "";
  cards: Meal[] = [];

  constructor(private http: HttpClient, private cartDataService: CartDataService) {}

  ngOnInit(): void {
    this.http.get<Meal[]>('./assets/pizze-rosse.json').subscribe((data) => {
      this.cards = data;
    });
  }

  showModal: boolean = false;

  openModal(){
    this.showModal = true;
    console.log("ok mod")
  }
  
}
