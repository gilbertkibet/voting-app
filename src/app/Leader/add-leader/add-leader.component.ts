import { Component, OnInit } from '@angular/core';
import { LeaderObj } from 'src/app/interfaces/leaders';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-leader',
  templateUrl: './add-leader.component.html',
  styles: [],
})
export class AddLeaderComponent implements OnInit {
  leaderObject: LeaderObj = new LeaderObj();
  leaderList: LeaderObj[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}
  getNewLeaderId() {
    const oldRecords = localStorage.getItem('leaderList');
    if (oldRecords != null) {
      const leaderList = JSON.parse(oldRecords);
      return leaderList.length + 1;
    } else {
      return 1;
    }
  }

  addLeader() {
    const latestId = this.getNewLeaderId();
    this.leaderObject.leaderId = latestId;
    const oldRecords = localStorage.getItem('leaderList');
    if (oldRecords != null) {
      const leaderList = JSON.parse(oldRecords);

      leaderList.push(this.leaderObject);

      localStorage.setItem('leaderList', JSON.stringify(leaderList));
    } else {
      const leaderArr = [];
      leaderArr.push(this.leaderObject);
      localStorage.setItem('leaderList', JSON.stringify(leaderArr));
    }

    this.toastr.success('Process Succeeded', 'eBallot');
    const records = localStorage.getItem('leaderList');
    if (records !== null) {
      this.leaderList = JSON.parse(records);
    }
  }

  resetForm(leaderForm: NgForm) {
    leaderForm.form.reset();
    this.leaderObject = new LeaderObj();
  }
}
