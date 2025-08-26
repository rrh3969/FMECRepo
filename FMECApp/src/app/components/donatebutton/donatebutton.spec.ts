import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donatebutton } from './donatebutton';

describe('Donatebutton', () => {
  let component: Donatebutton;
  let fixture: ComponentFixture<Donatebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donatebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Donatebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
