import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { Validators } from '@angular/forms';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:"ankita",
    password:"1234$",
    email:"aa@gmail.com",
    role:[ "" ]
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userservice:UserService,private router:Router,private fb:FormBuilder) { 
    this.signup();
  }

  ngOnInit(): void {
  }
  

signup(){
  
  const observable:Observable<any>=this.userservice.signup(this.user);
  observable.subscribe(
    (response:any)=>{
      console.log(response);
      
    },
    function(error){
      console.log("SignUp fails"+error);
    },
    ()=>{this.router.navigate(['signin']);
  }
  
    )
}
}
