import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthorComponent } from './author/author.component';
import { ReaderComponent } from './reader/reader.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { HttpClient } from '@angular/common/http';

const routes:Route []= [
  {path:'search', component:SearchBookComponent},
  {path:'', component:FormsComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  //{path:'', component:BookformComponent},
  {path:'author/createbook', component:BookformComponent},
  {path:'author', component:AuthorComponent},
  {path:'reader', component:ReaderComponent},
  {path:'reader/buyBook', component:BuyBookComponent}



];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    SigninComponent,
    SearchBookComponent,
    HeaderComponent,
    BookformComponent,
    AuthorComponent,
    ReaderComponent,
    BuyBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
