import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateDbComponent } from './update-db/update-db.component';
import { CreateDbComponent } from './create-db/create-db.component';
import { LoginComponent } from './login/login.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
const routes: Routes = [
  { path: 'createdb', component: CreateDbComponent },
  { path: 'updatedb', component: UpdateDbComponent },
  { path: 'login', component:LoginComponent },
  { path: 'home', component: HomescreenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpdateDbComponent,
    CreateDbComponent,
    LoginComponent,
    HomescreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
