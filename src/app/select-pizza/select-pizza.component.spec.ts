import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPizzaComponent } from './select-pizza.component';

describe('SelectPizzaComponent', () => {
  let component: SelectPizzaComponent;
  let fixture: ComponentFixture<SelectPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPizzaComponent]
    });
    fixture = TestBed.createComponent(SelectPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
