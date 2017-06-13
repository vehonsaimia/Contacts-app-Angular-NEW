import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  get entry() {
    return this._entry;
  }

  set entry(value) {
    this._entry = value;
  }

  get CONTACTS() {
    return this._CONTACTS;
  }

  set CONTACTS(value) {
    this._CONTACTS = value;
  }

  private _contact;
  private _entry;
  private _CONTACTS;

 /* @input() contacts; Contact[];
  @output() select: EventEmitter<Contact>;*/

  /*constructor() {this.select = new EventEmitter();
  }*/
  constructor(private router: Router) {
    this._CONTACTS = [{
      id: '1',
      firstName: 'Kalle',
      lastName: 'Ankka',
      mobile: '1245 635',
      streetAddress: 'Valtakatu 34',
      city: 'Lappeenranta'
    },
      {
        id: '2',
        firstName: 'Pekka',
        lastName: 'Pouta',
        mobile: '0400 215 8970',
        streetAddress: 'Ainonkatu 21',
        city: 'Lappeenranta'
      },
      {
        id: '3',
        firstName: 'Paula',
        lastName: 'Kataja',
        mobile: '050215 6700',
        streetAddress: 'Onnelantie 11',
        city: 'Lappeenranta'
      }];

  }

  ngOnInit() {
  }
  // contactSelected(contact: Contact){console.log(contact); this.select.emit(contact);}

}
