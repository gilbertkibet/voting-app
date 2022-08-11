import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVoteComponent } from './student-vote.component';

describe('StudentVoteComponent', () => {
  let component: StudentVoteComponent;
  let fixture: ComponentFixture<StudentVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
