import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  URL = 'http://localhost:8080/personas/'; // TODO: fix URL

  constructor(private http: HttpClient) { }

  public obtenerEstudios() : Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.URL + 'traer/perfil'); // TODO: fix URL
  }
}
