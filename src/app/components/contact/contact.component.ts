import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact';
import { ContactImpl } from 'src/app/classes/contact-impl';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactservice: ContactService) { }
  addressComplet:string;
  addressCity = [];
  contactsResults : Contact = new ContactImpl();
  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactservice.findAll().subscribe((contact)=>{
      this.contactsResults = contact;
      this.addressComplet =this.contactsResults.address;
      this.addressCity = this.addressComplet.split(',');
    })
  }

}
