import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie2Component } from './partie2.component';

describe('Partie2Component', () => {
  let component: Partie2Component;
  let fixture: ComponentFixture<Partie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Partie2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
