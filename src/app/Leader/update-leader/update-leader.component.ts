import { Component, OnInit } from '@angular/core';
import { LeaderObj } from 'src/app/interfaces/leaders';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-leader',
  templateUrl: './update-leader.component.html',
  styles: [],
})
export class UpdateLeaderComponent implements OnInit {
  leaderObject: LeaderObj = new LeaderObj();

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((res) => {
      this.leaderObject.leaderId = res['id'];
    });
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('leaderList');
    if (oldRecords != null) {
      const leaderList = JSON.parse(oldRecords);
      const currentLeader = leaderList.find(
        (m: any) => m.leaderId == this.leaderObject.leaderId
      );
      if (currentLeader !== undefined) {
        this.leaderObject.fullName = currentLeader.fullName;
        this.leaderObject.position = currentLeader.position;
      }
    }
  }
  // getNewLeaderId() {
  //   const oldRecords = localStorage.getItem('leaderList');
  //   if (oldRecords != null) {
  //     const leaderList = JSON.parse(oldRecords);
  //     return leaderList.length + 1;
  //   } else {
  //     return 1;
  //   }
  // }

  updateLeader() {
    // const latestId = this.getNewLeaderId();
    // this.leaderObject.leaderId = latestId;
    const oldRecords = localStorage.getItem('leaderList');
    if (oldRecords != null) {
      const leaderList = JSON.parse(oldRecords);
      leaderList.splice(
        leaderList.findIndex(
          (a: any) => a.leaderId === this.leaderObject.leaderId
        ),
        1
      );
      leaderList.push(this.leaderObject);

      localStorage.setItem('leaderList', JSON.stringify(leaderList));
    }

    // else {
    //   const leaderArr = [];
    //   leaderArr.push(this.leaderObject);
    //   localStorage.setItem('leaderList', JSON.stringify(leaderArr));
    // }

    this.toastr.info('Process Succeeded', 'eBallot');
  }

  resetForm(leaderForm: NgForm) {
    leaderForm.form.reset();
    this.leaderObject = new LeaderObj();
  }
}
