import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  usernameValidation = 'test me';
  passwordValidation = 'me';



  constructor(private router: Router) {let loggedUser = 'testing'
      }

  verifyLogin()
  {console.log('navigate to contacts');
  this.router.navigate(['contacts']);}

  ngOnInit() {
  }
}
