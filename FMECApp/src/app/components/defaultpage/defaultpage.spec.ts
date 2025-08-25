import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defaultpage } from './defaultpage';

describe('Defaultpage', () => {
  let component: Defaultpage;
  let fixture: ComponentFixture<Defaultpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defaultpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Defaultpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
