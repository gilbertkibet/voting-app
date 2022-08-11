import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit(): void {}
}

// logIn() {
//   this.toastr.success('Login Successfull');
//   this.router.navigate(['/administrator/home']);
// }
