import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user={
    username:"ankita",
    password:"1234$"
  }
  
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  signin(){
    const observable:Observable<any>=this.userservice.signin(this.user);
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
