import { Component, OnInit, Input } from '@angular/core';
import { LeaderObj } from '../interfaces/leaders';

@Component({
  selector: 'app-student-vote',
  templateUrl: './student-vote.component.html',
  styleUrls: ['./student-vote.component.scss'],
})
export class StudentVoteComponent implements OnInit {
  leaderList: LeaderObj[] = [];
  votes: number = 0;

  constructor() {}

  ngOnInit(): void {
    const records = localStorage.getItem('leaderList');
    if (records !== null) {
      this.leaderList = JSON.parse(records);
    }
  }
  onButtonClick() {
    return (this.votes = +1);
  }
}
