import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from '../models/skill';
//import * as $ from "jquery";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

skillsResult : Skill[] = [];

  constructor(private skillservice:SkillService) { }

  ngOnInit(): void {
    this.gettSkills()

    $('.progress-bar').on('inview', function (event, isInView) {
			if (isInView) {
				$(this).css('width',  function() {
					return ($(this).attr('aria-valuenow')+'%');
				});
			}
		});
		$('.dial').on('inview', function (event, isInView) {
			if (isInView) {
				var $this = $(this);
				var myVal = $this.attr("value");
				var color = $this.attr("data-color");
			(<any>$this).knob({
					readOnly: true,
					width: 200,
					rotation: 'anticlockwise',
					thickness: .05,
					inputColor: '#232323',
					//fgColor: color,
					fgColor: '#337ab7',
					bgColor: '#e8e8e8',
					'draw' : function () {
						$(this.i).val(this.cv + '%')
					}
				});
				$({
					value: 0
				}).animate({
					value: myVal
				}, {
					duration: 1000,
					easing: 'swing',
					step: function() {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}
		});
  }



  gettSkills(){
    this.skillservice.getAll().subscribe((skills)=>{
      this.skillsResult = skills['data']
    })
  }

}
