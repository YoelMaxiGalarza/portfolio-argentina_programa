import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  URL = 'https://yoelgalarza-argentinaprograma.herokuapp.com/estudio'; // TODO: fix URL

  constructor(private http: HttpClient) { }

  public obtenerEstudios() : Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.URL + '/lista'); // TODO: fix URL
  }

  public crearEstudio(estudio: Estudio) : Observable<Estudio> {
		console.log(this.URL);
		return this.http.post<Estudio>(this.URL + '/crear', estudio);
	}

	public editarEstudio(estudio: Estudio) : Observable<Estudio> {
		console.log(this.URL);
		return this.http.put<Estudio>(this.URL + '/update', estudio);
	}

  public eliminarEstudio(estudioId: number): Observable<any> {
		return this.http.delete<any>(this.URL + '/delete/' + estudioId);
	  }
}
