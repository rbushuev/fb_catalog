import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddFootballerComponent } from './add-footballer/add-footballer.component';
import { ListFootballerComponent } from './list-footballer/list-footballer.component';

import { FootballerService } from 'src/shared/services/footballer.service';
import { TeamService } from 'src/shared/services/team.service';
import { AddTeamModalComponent } from './add-team-modal/add-team-modal.component';
import { EditFootballerModalComponent } from './edit-footballer-modal/edit-footballer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddFootballerComponent,
    ListFootballerComponent,
    AddTeamModalComponent,
    EditFootballerModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    AddTeamModalComponent,
    EditFootballerModalComponent
  ],
  providers: [
    FootballerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
