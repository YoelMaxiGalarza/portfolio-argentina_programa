import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
	providedIn: 'root'
})
export class ProyectoService {
	URL = 'http://localhost:8080/personas/'; // TODO: fix URL

	constructor(private http: HttpClient) { }

	public obtenerProyectos(): Observable<Proyecto[]> {
		return this.http.get<Proyecto[]>(this.URL + 'traer/perfil');
	}
}
