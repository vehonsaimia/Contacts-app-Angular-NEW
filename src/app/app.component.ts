import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*CONTACTS: [ContactsComponent];*/

  constructor(private router: Router)
  {/*this.CONTACTS.push(new Contacts*/}



  goToContacts() {
    console.log('navigate to contacts');
    this.router.navigate(['contacts']);
  }

  goToLogin() {
    console.log('navigate to login');
    this.router.navigate(['login']);
  }

  goToContactsList() {
    console.log('navigate to contacts-list');
    this.router.navigate(['contacts-list']);
  }

}
