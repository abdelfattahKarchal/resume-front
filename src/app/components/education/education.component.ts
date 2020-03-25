import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from '../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations : Education[] = [];
  constructor(private educationservice:EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations(){
    this.educationservice.getAll().subscribe((educations) =>{
      this.educations = educations['data'];
    } );

  }

}
