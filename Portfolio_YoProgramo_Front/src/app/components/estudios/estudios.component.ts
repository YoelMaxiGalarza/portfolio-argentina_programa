import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
	selector: 'app-estudios',
	templateUrl: './estudios.component.html',
	styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

	// TODO: remove hardcoded values and call API when component loads (ngOnInit)
	estudios: Estudio[] = [
		{
			id: 1,
			titulo: "Estudio 1",
			institucion: "Institución",
			fechaInicio: "fecha inicio ...",
			fechaFin: "fecha fin ...",
			logo: "./../../assets/APLogo.png",
			descripcion: "Descripción"
		},
		{
			id: 2,
			titulo: "Estudio 2",
			institucion: "Institución",
			fechaInicio: "fecha inicio ...",
			fechaFin: "fecha fin ...",
			logo: "./../../assets/APLogo.png",
			descripcion: "Descripción"
		}
	];

	constructor(public estudioService: EstudioService) { }

	ngOnInit(): void {
		// this.estudioService.obtenerEstudios().subscribe(data => {this.estudios = data});
	}

}
