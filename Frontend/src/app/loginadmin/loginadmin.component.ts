import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtadminService } from '../jwtadmin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  authenticationRequest:any={

    "username":"",
    "password":"",
  };
  surveyForm!: FormGroup;
  submitted= false;
  response:any;

//*this is for declaring toggle password

  public showPassword: boolean = false;

 constructor(private service:JwtadminService,private  formBuilder: FormBuilder,private router:Router) { }

 onSubmit():void

 {

  

   if((this.authenticationRequest.username!=''&& this.authenticationRequest.password!='')&&(this.authenticationRequest.username!=null && this.authenticationRequest.password!=null))

   {
     console.log("we have to submit the form");
     this.service.authenticateClient(this.authenticationRequest)
     .subscribe((data:any)=>

      {
        console.log(data);
 // localStorage.setItem('token',data)

      this.service.loginUser(data)
       if(this.service.isLoggedIn()==true)

       {
      window.location.href="/search"
       } 

       else

       {
         alert("Check password");

       } 

      },

      (error:any)=>

       {
         console.log(error);

       }
       );
      }
   
   else

   {
     alert("Fileds are empty!!");

   }

  }
 
  ngOnInit(): void {

  }

//*togglepassword method declaration  
public togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword; 
 }
}

