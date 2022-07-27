import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
	providedIn: 'root'
})
export class SkillService {
	URL = 'http://localhost:8080/personas/'; // TODO: fix URL

	constructor(private http: HttpClient) { }

	public obtenerSkills(): Observable<Skill[]> {
		return this.http.get<Skill[]>(this.URL + 'traer/perfil');
	}
}
