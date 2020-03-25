import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presentation } from '../components/models/presentation';



@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private apiUrl = "http://127.0.0.1:8000/presentations";

  constructor(private http:HttpClient) { }

  getAll(){
   return this.http.get<Presentation>(this.apiUrl);
  }
}
