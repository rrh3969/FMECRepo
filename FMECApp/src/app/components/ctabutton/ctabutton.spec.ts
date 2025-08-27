import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctabutton } from './ctabutton';

describe('Ctabutton', () => {
  let component: Ctabutton;
  let fixture: ComponentFixture<Ctabutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ctabutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctabutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
