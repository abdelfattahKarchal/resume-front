import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../components/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUtl="http://127.0.0.1:8000/skills";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Skill[]>(this.apiUtl);
  }
}
