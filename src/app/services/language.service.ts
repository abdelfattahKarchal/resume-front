import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from '../components/models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiUtl="http://127.0.0.1:8000/langages";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Language>(this.apiUtl);
  }
}
