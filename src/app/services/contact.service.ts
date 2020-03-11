import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../components/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = "http://127.0.0.1:8000/contacts";
  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Contact>(this.apiUrl);
  }
}
