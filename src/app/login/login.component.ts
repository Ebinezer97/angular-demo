import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
  backgroundImage:string='assets/loginbackground.jpg';
  login:boolean=true;
  signup:boolean=false;
  constructor(private router:Router,private common:CommonService) {
   
  }
  ngOnInit(): void {
    
  } 
  logincheck(){
    this.common.loginstatus=true;
    this.router.navigate(['home']);

  }

}
