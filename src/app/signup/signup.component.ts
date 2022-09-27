import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:"ankita",
    password:"1234$",
    email:"aa@gmail.com"
  }
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
signup(){
  const observable:Observable<any>=this.userservice.signup(this.user);
  observable.subscribe(
    (response:any)=>{
      console.log(response);
      
    },
    function(error){
      alert("Something went wrong")
    }
  
    )
}
}
