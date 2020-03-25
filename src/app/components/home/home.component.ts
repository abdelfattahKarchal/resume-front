import { Component, OnInit } from '@angular/core';
import { PresentationImpl } from 'src/app/classes/presentation-impl';
import { PresentationService } from 'src/app/services/presentation.service';
import { Presentation } from '../models/presentation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
presentationResult:Presentation = new PresentationImpl();
constructor(private presentationservice:PresentationService) { }

  ngOnInit(): void {
    this.getPresentations();
  }

  getPresentations(){
    this.presentationservice.getAll().subscribe(presentation => {
      this.presentationResult = presentation
    });
  }

}
