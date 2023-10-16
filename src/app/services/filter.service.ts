import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filteredForSubject = new BehaviorSubject<string>('all');
  filteredFor$ = this.filteredForSubject.asObservable();

  setFilteredFor(value: string) {
    this.filteredForSubject.next(value);
  }
}
