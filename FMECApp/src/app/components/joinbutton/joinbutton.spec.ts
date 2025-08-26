import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinbutton } from './joinbutton';

describe('Joinbutton', () => {
  let component: Joinbutton;
  let fixture: ComponentFixture<Joinbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Joinbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Joinbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
