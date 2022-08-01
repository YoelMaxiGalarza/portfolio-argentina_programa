import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
	providedIn: 'root'
})
export class ExperienciaService {
	URL = 'http://localhost:8080/experiencias'; // TODO: fix URL

	constructor(private http: HttpClient) { }

	// TODO: complete
	public obtenerExperiencias(): Observable<Experiencia[]> {
		return this.http.get<Experiencia[]>(this.URL + '/lista'); // TODO: fix URL
	}

	public crearExperiencia(experiencia: Experiencia) : Observable<Experiencia> {
		console.log(this.URL);
		return this.http.post<Experiencia>(this.URL + '/crear', experiencia);
	}

	public editarExperiencia(experiencia: Experiencia) : Observable<Experiencia> {
		console.log(this.URL);
		return this.http.put<Experiencia>(this.URL + '/update', experiencia);
	}
	public eliminarExperiencia(expId: number): Observable<any> {
		return this.http.delete<any>(this.URL + '/delete/' + expId);
	  }
}
