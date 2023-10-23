import { Component } from '@angular/core';
import { FilterPizzePipe } from '../filter-pizze.pipe';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {
  searchTerm: string = '';

  selectPill = {
    rosse: 'rosse',
    bianche: 'bianche',
    focacce: 'focacce',
    bevande: 'bevande',
  };

  selectedPill: string = this.selectPill.rosse;

  selectPillFunction(scelta: string) {
    switch (scelta) {
      case this.selectPill.rosse:
        this.selectedPill = this.selectPill.rosse;
        break;
      case this.selectPill.bianche:
        this.selectedPill = this.selectPill.bianche;
        break;
      case this.selectPill.focacce:
        this.selectedPill = this.selectPill.focacce;
        break;
      case this.selectPill.bevande:
        this.selectedPill = this.selectPill.bevande;
        break;
    }
  }
}
