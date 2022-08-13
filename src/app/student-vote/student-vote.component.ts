import { Component, OnInit } from '@angular/core';
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
}

let voteBtn: any = document.querySelector('#votebtn');
let input1: any = document.querySelector('#input1');

voteBtn?.addEventListener('click', () => {
  input1.value = parseInt(input1.value) + 1;
});
