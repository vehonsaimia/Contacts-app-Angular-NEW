import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule, MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
//import '~@angular/material/theming';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsListComponent } from './contacts-list/contacts-list.component';



const routes =
  [
    {path: '',
      redirectTo: 'login',
      pathMatch: 'full'},
        {path: 'login',
      component: LoginComponent},
    {path: 'contacts',
      component: ContactsComponent},
    {path: 'contacts-list',
      component: ContactsListComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdIconModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
