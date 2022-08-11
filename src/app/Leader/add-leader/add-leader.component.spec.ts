import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaderComponent } from './add-leader.component';

describe('AddLeaderComponent', () => {
  let component: AddLeaderComponent;
  let fixture: ComponentFixture<AddLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
