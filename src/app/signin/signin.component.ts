import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user={
    username:"ramuuu",
    password:"rameshh244$"
  }
  
  constructor(private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
    const observable:Observable<any>=this.userservice.signin(this.user);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        sessionStorage.setItem('credentials', JSON.stringify(response));
        if(response.roles[0]=="ROLE_AUTHOR"){
          this.router.navigate(['author']);
        }
        else if(response.roles[0]=="ROLE_READER"){
          this.router.navigate(['reader']);
        }
        //this.router.navigate(['']);
      },
      function(error){
        alert("Something went wrong")
      }
    
      )
  }

}
