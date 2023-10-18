import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocacceComponent } from './focacce.component';

describe('FocacceComponent', () => {
  let component: FocacceComponent;
  let fixture: ComponentFixture<FocacceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocacceComponent]
    });
    fixture = TestBed.createComponent(FocacceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
