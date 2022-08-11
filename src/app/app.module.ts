import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LeaderListComponent } from './Leader/leader-list/leader-list.component';
import { AddLeaderComponent } from './Leader/add-leader/add-leader.component';
import { UpdateLeaderComponent } from './Leader/update-leader/update-leader.component';
import { ToolBarComponent } from './layout/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeaderListComponent,
    AddLeaderComponent,
    UpdateLeaderComponent,
    ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
