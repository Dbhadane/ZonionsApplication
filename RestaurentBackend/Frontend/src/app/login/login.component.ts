import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = 
  {
    username:"",
    password:''
  };
  uname:string='Dnyaneshwar';
  pass:string='Dinu@123';
  
  constructor( private route: Router, private cobj:CheckService) { }

  ngOnInit() {

  }

  onSubmit(f:any) 
  {
    console.log(this.model.username);
    console.log(this.model.password);
    if(this.uname === this.model.username && this.pass === this.model.password )
       {
        
        this.cobj.setUserSession( this.uname);
         alert('Login-Successfull');
        
        this.route.navigate(['home']);
       }
     else
       {
        alert('Invalid Data');
       }  
   
    
  }

}
