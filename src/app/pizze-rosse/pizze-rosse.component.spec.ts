import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeRosseComponent } from './pizze-rosse.component';

describe('PizzeRosseComponent', () => {
  let component: PizzeRosseComponent;
  let fixture: ComponentFixture<PizzeRosseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzeRosseComponent]
    });
    fixture = TestBed.createComponent(PizzeRosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
