import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFootballerComponent } from './list-footballer/list-footballer.component';
import { AddFootballerComponent } from './add-footballer/add-footballer.component';


const routes: Routes = [
  { path: '', component: ListFootballerComponent, pathMatch: 'full' },
  { path: 'addfootballer', component: AddFootballerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
