import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaderComponent } from './update-leader.component';

describe('UpdateLeaderComponent', () => {
  let component: UpdateLeaderComponent;
  let fixture: ComponentFixture<UpdateLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
