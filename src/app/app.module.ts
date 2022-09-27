import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BookformComponent } from './bookform/bookform.component';
const routes:Route []= [
  {path:'search', component:SearchBookComponent},
  //{path:'', component:FormsComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'', component:BookformComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    SigninComponent,
    SearchBookComponent,
    HeaderComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
