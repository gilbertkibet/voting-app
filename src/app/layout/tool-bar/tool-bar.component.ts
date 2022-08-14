import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    this.router.navigate(['/login']);
    this.toastr.warning('Process Succeeded', 'eBallot');
  }
}
