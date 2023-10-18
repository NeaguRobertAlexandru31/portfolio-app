import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeBiancheComponent } from './pizze-bianche.component';

describe('PizzeBiancheComponent', () => {
  let component: PizzeBiancheComponent;
  let fixture: ComponentFixture<PizzeBiancheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzeBiancheComponent]
    });
    fixture = TestBed.createComponent(PizzeBiancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
