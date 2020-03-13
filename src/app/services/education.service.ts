import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../components/models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = "http://127.0.0.1:8000/educations";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Education[]>(this.apiUrl);
  }
}
