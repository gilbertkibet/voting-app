import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolBarComponent } from './layout/tool-bar/tool-bar.component';
import { AddLeaderComponent } from './Leader/add-leader/add-leader.component';
import { LeaderListComponent } from './Leader/leader-list/leader-list.component';
import { UpdateLeaderComponent } from './Leader/update-leader/update-leader.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: ToolBarComponent },
  { path: 'leaderlist', component: LeaderListComponent },
  { path: 'registerleader', component: AddLeaderComponent },
  { path: 'updateleader/:id', component: UpdateLeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
