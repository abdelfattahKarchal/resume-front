import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { About } from '../models/about';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact';
import { ContactImpl } from 'src/app/classes/contact-impl';
import { AboutImpl } from 'src/app/classes/about-impl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutservice:AboutService, private contactservice:ContactService) { }
  aboutResults: About = new AboutImpl();
  contactsResults: Contact =new ContactImpl();
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
