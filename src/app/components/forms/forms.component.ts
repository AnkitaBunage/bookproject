import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user={
    name:"",
    age:0
  }

save(){
  // console.log(this.name);
  // console.log(this.age);
const observable=this.userservice.createUser(this.user);
observable.subscribe(
  (response:any)=>{
    console.log(response);
    sessionStorage.setItem('credentials',JSON.stringify(response));
    this.router.navigate(['']);
    
  },
  function(error){
    alert("Something went wrong")
  }

  )


}

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

}
