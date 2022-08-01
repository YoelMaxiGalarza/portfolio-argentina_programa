import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/persona'; // TODO: fix URL

  constructor(private http:HttpClient) { }

  public obtenerPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ '/id/1');
  }

  public editarPersona(persona: Persona) : Observable<Persona> {
		console.log(this.URL);
		return this.http.put<Persona>(this.URL + '/update', persona);
	}

}
