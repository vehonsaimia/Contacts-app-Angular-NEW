import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

 entry;

  constructor
     (private router: Router)
      { /*this.entry = {firstName: '', lastName: '', }*/ }

  saveContact()
  {console.log('navigate to contacts-list');
    this.router.navigate(['contacts-list']);

     /*this.CONTACTS.firstName.push(this.entry.firstName);
      this.CONTACTS.lastName.push(this.entry.lastName);
      this.CONTACTS.mobile.push(this.entry.mobile);
      this.CONTACTS.streetAddress.push(this.entry.streetAddress);
      this.CONTACTS.city.push(this.entry.city1);*/
  }

  ngOnInit(){
  }

}
