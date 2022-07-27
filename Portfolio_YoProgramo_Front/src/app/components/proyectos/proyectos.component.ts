import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
	styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

	proyectos: Proyecto[] = [
		{
			id: 1,
			titulo: "Proyecto 1",
			url: "",
			descripcion: "Descripcion ...",
			imagen: ""
		},
		{
			id: 2,
			titulo: "Proyecto 2",
			url: "",
			descripcion: "Descripcion ...",
			imagen: ""
		}
	];

	constructor(public proyectoService: ProyectoService) { }

	ngOnInit(): void {
		this.proyectoService.obtenerProyectos().subscribe(data => { this.proyectos = data });
	}

}
