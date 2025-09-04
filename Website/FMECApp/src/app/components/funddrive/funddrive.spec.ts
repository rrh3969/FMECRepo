import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funddrive } from './funddrive';

describe('Funddrive', () => {
  let component: Funddrive;
  let fixture: ComponentFixture<Funddrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funddrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funddrive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
