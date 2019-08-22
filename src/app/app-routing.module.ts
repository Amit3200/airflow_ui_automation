import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CreateDbComponent} from './create-db/create-db.component';
import {UpdateDbComponent} from './update-db/update-db.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'createDb', component: CreateDbComponent },
  { path: 'updateDb', component: UpdateDbComponent },
  { path: 'login', component:LoginComponent },
  { path: 'home', component: HomescreenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
