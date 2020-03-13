import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experincesResult : Experience[] = [];

  constructor(private experienceservice:ExperienceService) { }

  ngOnInit(): void {
    (<any>$('.testimonial-slider')).owlCarousel({
			items: 1,
			autoplay: true,
			loop: true
    });

    this.getExperiences();
  }

  getExperiences(){
    this.experienceservice.getAll().subscribe((experiences)=>{
      this.experincesResult = experiences;
      console.log(this.experincesResult);
    })
  }

}
