import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
	providedIn: 'root'
})
export class SkillService {
	URL = 'https://yoelgalarza-argentinaprograma.herokuapp.com/skill'; // TODO: fix URL

	constructor(private http: HttpClient) { }

	// TODO: complete
	public obtenerSkills(): Observable<Skill[]> {
		return this.http.get<Skill[]>(this.URL + '/lista'); // TODO: fix URL
	}

	public crearSkill(skill: Skill) : Observable<Skill> {
		return this.http.post<Skill>(this.URL + '/crear', skill);
	}

	public editarSkill(skill: Skill) : Observable<Skill> {
		console.log(this.URL);
		return this.http.put<Skill>(this.URL + '/update', skill);
	}
	public eliminarSkill(skillId: number): Observable<any> {
		return this.http.delete<any>(this.URL + '/delete/' + skillId);
	  }
}