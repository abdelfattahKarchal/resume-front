import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from '../models/experience';
import { About } from '../models/about';
import { AboutImpl } from 'src/app/classes/about-impl';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experincesResult : Experience[] = [];
  about : About = new AboutImpl();

  constructor(private experienceservice:ExperienceService, private aboutservice:AboutService) { }

  ngOnInit(): void {
    (<any>$('.testimonial-slider')).owlCarousel({
			items: 1,
			autoplay: true,
			loop: true
    });

    this.getExperiences();
    this.getAbouts();
  }

  getExperiences(){
    this.experienceservice.getAll().subscribe((experiences)=>{
      this.experincesResult = experiences['data'];
      console.log(this.experincesResult);
    })
  }
  getAbouts(){
    this.aboutservice.findAll().subscribe(about => this.about = about)
  }

}
