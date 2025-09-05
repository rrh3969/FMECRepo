import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Membersonly } from './membersonly';

describe('Membersonly', () => {
  let component: Membersonly;
  let fixture: ComponentFixture<Membersonly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Membersonly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Membersonly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
