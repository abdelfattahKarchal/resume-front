import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact';
import { ContactImpl } from 'src/app/classes/contact-impl';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  addressComplet:string;
  addressCity = [];
  contactsResults : Contact = new ContactImpl()
  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactservice.findAll().subscribe((contact) =>{
      this.contactsResults = contact;
      this.addressComplet =this.contactsResults.address;
      this.addressCity = this.addressComplet.split(',');
    });
  }

}
