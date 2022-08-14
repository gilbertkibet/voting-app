import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  loginToAdmin() {
    this.router.navigate(['/registerleader']);
    this.toastr.success('Process Succeeded', 'eBallot');
  }
  loginToStudent() {
    this.router.navigate(['/studentvote']);
    this.toastr.success('Process Suceeded', 'eBallot');
  }
}
