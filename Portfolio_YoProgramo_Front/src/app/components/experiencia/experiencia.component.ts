import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
	selector: 'app-experiencia',
	templateUrl: './experiencia.component.html',
	styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

	// TODO: remove hardcoded values and call API when component loads (ngOnInit)
	experiencias: Experiencia[] = [
		{
			id: 1,
			nombre: "Experiencia 1",
			puesto: "Puesto",
			descripcion: "Descripción",
			logo: "../../../assets/APLogo.png",
			fechaInicio: "fecha inicio ...",
			fechaFin: "fecha fin ..."
		},
		{
			id: 2,
			nombre: "Experiencia 2",
			puesto: "Puesto",
			descripcion: "Descripción",
			logo: "../../../assets/APLogo.png",
			fechaInicio: "fecha inicio ...",
			fechaFin: "fecha fin ..."
		}
	];

	constructor(public experienciaService: ExperienciaService) { }

	// TODO: complete this
	ngOnInit(): void {
		// this.experienciaService.obtenerExperiencias().subscribe(data => {this.experiencias = data});
	}

}
