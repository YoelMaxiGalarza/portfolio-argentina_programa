import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
	providedIn: 'root'
})
export class ExperienciaService {
	URL = 'http://localhost:8080/experiencias/'; // TODO: fix URL

	constructor(private http: HttpClient) { }

	// TODO: complete
	public obtenerExperiencias(): Observable<Experiencia[]> {
		return this.http.get<Experiencia[]>(this.URL); // TODO: fix URL
	}
}
