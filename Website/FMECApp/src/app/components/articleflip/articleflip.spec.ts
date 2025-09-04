import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articleflip } from './articleflip';

describe('Articleflip', () => {
  let component: Articleflip;
  let fixture: ComponentFixture<Articleflip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articleflip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articleflip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
