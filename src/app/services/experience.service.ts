import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../components/models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
private apiUtl="http://127.0.0.1:8000/experiences";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Experience[]>(this.apiUtl);
  }

}
