import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
	selector: 'app-hard-soft-skills',
	templateUrl: './hard-soft-skills.component.html',
	styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

	// TODO: remove hardcoded values and call API when component loads (ngOnInit)
	skills: Skill[] = [
		{
			id: 1,
			nombre: "HTML5",
			imagen: "../assets/html.png",
			porcentaje: 85
		},
		{
			id: 2,
			nombre: "CSS3",
			imagen: "../assets/CSS.png",
			porcentaje: 75
		},
		{
			id: 3,
			nombre: "Github",
			imagen: "../assets/github.png",
			porcentaje: 50
		},
	];

	constructor(public skillService: SkillService) { }

	ngOnInit(): void {
		// this.skillService.obtenerSkills().subscribe(data => {this.skills = data});
	}

}
