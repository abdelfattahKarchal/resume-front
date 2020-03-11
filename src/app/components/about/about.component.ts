import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { About } from '../models/about';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutservice:AboutService, private contactservice:ContactService) { }
  aboutResults: About;
  contactsResults: Contact;
  ngOnInit(): void {
    this.getAbouts();
    this.getContacts();
  }

  getAbouts(){
    this.aboutservice.findAll().subscribe(about => this.aboutResults = about)
  }

  getContacts(){
    this.contactservice.findAll().subscribe(about => this.contactsResults = about)
  }

}
