import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<any>$('.testimonial-slider')).owlCarousel({
			items: 1,
			autoplay: true,
			loop: true
		});
  }

}
