import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../components/models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  apiUrl = "http://127.0.0.1:8000/abouts";

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<About>(this.apiUrl);
  }

}
