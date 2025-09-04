import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inmemoriam } from './inmemoriam';

describe('Inmemoriam', () => {
  let component: Inmemoriam;
  let fixture: ComponentFixture<Inmemoriam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inmemoriam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inmemoriam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
